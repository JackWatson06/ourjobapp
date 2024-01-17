function MaxSize(size)
{
    return {
    
        validate: function(value)
        {
            return value.size < (size * 1048576);
        },
    
        message: function ()
        {
            return `Files may only be ${size} MB`
        }
    };
}


export default MaxSize