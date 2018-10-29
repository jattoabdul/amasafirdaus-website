import React, { Component } from 'react';

class BlogPeekTabs extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex
        };
    }
  
    // Toggle currently active tab
    handleTabClick = (tabIndex) => {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
        });
    }
  
    // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps = () => {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick : this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }
  
    // Render current active tab content
    renderActiveTabContent= () => {
        const { children } = this.props;
        const {activeTabIndex} = this.state;
        if(children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }
  
    render() {
        return (
            <div className="blog-peek-container tabs">
                <div className="blog-peek-categories">
                    <ul className="cats tabs-nav">
                        {this.renderChildrenWithTabsApiAsProps()}
                    </ul>
                </div>
                <div className="blog-peek-category-posts active">
                    {this.renderActiveTabContent()}
                </div>
            </div>
        );
    }
};


// export default connect(mapStateToProps, mapDispatchToProps)(BlogPeekTabs);
export default BlogPeekTabs;