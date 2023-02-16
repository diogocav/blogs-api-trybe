module.exports = async (req, _res, next) => {
    const { title, content, categoryIds } = req.body;
  
    if (!title || !content || !categoryIds) {
        throw new Error('Some required fields are missing');
    }
    // if (title.length <= 0 || content.length <= 0 || categoryIds.length <= 0) {
    //     throw new Error('"name" is required');
    // }
    next();
};  