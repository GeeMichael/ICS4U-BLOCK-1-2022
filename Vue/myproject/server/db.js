import { connect } from 'mongoose';

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => console.log('Database connected')).catch((err) => console.log(err));
