import Promise from 'promise';
import superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const agent = superagentPromise(superagent, Promise);

/**
 * @description upload function
 *
 * @param {string} images
 *
 * @returns {null} description
 */
const uploadImage = (images) => {
  const formData = new FormData();
  const cloudName = 'irshaadtechnologies';
  const unassignedPreset = 'qbmlbnja';
  let fileBlob = '';
  if (images.target) {
    fileBlob = images.target.files[0];
  } else {
    fileBlob = images.blob();
  };
  formData.append('file', fileBlob);
  formData.append('tags', 'blog', 'posts');
  formData.append('upload_preset', unassignedPreset);
  formData.append('api_key', '356278858293933');
  formData.append('timestamp', (Date.now() / 1000));

  return agent
    .post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );
};
export default uploadImage;
