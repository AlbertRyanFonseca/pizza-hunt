const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// get a total count of comments and replies on retrieval 
PizzaSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;