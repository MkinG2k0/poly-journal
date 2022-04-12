import {model, Schema, Types} from 'mongoose';

interface ILink {
	from:string
	to:string
	code:string
	data:Date
	clicks:number
	owner:{ type: typeof Types.ObjectId; ref: string; }
}

export const linkSchema = new Schema<ILink>({
	from: {type: String, required: true},
	to: {type: String, required: true, unique: true},
	code: {type: String, required: true, unique: true},
	data: {type: Date, default: Date.now,},
	clicks: {type: Number, default: 0,},
	owner: {type: Types.ObjectId, ref: 'User'}
})


export const Link = model<ILink>('Link', linkSchema);