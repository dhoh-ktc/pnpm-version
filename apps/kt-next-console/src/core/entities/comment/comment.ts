import { IComment, ICommentData } from "./index";
// import { getRandomBoolean, getRandomDate } from '@/utils/faker'

export class Comment implements IComment {
  isHidden?: boolean;
  isBlocked?: boolean;
  createdDate?: string;
  postId?: number;
  id?: number;
  name: string;
  email: string;
  body: string;

  constructor(data: ICommentData) {
    if (data.postId) this.postId = data.postId;
    if (data.id) this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.body = data.body;

    // this.isHidden = getRandomBoolean()
    // this.isBlocked = getRandomBoolean()
    // this.createdDate = getRandomDate()
  }

  validate(): boolean {
    throw new Error("Method not implemented.");
  }
}
