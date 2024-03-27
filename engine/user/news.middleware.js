import mongoose from 'mongoose'

const news_schema = new mongoose.Schema({
    source: {
        id: String,
        name: String
    },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    content: String
});

const News = mongoose.model('News', news_schema);

export { News }