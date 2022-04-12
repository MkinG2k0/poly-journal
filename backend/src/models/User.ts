import {  Schema, Types ,model} from 'mongoose';


interface IUser {
	email: string;
	password: string;
	links: string[];
}

 const userSchema = new Schema<IUser>({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	links: [{type: Types.ObjectId, ref: 'Link'}]
})

export const User = model<IUser>('User', userSchema);