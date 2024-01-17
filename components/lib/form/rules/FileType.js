function FileType(types) {

    return {
        validate: function(value)
        {
            return types.includes(value.type);
        },
    
        message: function ()
        {
            return `You can only upload .doc, .docx, .pdf, or .txt`
        }
    };
}

export default FileType