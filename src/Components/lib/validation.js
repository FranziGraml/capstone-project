const validateName = Name => Name.trim().length !== 0;
const validatePost = Post => Post.trim().length !== 0;
const validateMobile = Mobile =>
	/^[+0-9]*$/.test(Mobile) && Mobile.length >= 4 && Mobile.length <= 30;
const validateMail = Mail =>
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Mail);
const validateTag = tag => tag.length > 0;

const validatePostName = Name => validateName(Name);
const validatePostPost = Post => validatePost(Post);
const validatePostMobile = Mobile => validateMobile(Mobile);
const validatePostMail = Mail => validateMail(Mail);
const validatePostTag = tag => validateTag(tag);

export {
	validatePostMobile,
	validatePostMail,
	validatePostName,
	validatePostPost,
	validatePostTag,
};
