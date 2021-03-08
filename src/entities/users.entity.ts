import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { PostsEntity } from './posts.entity';
import { SharedProp } from './sharedProp.entity';

export type UserType = 'admin' | 'user';

@Entity({name: 'users'})
export class UsersEntity extends SharedProp{
  @PrimaryGeneratedColumn()
  id: number
  @Column({name: 'first_name',nullable:false})
  firstName: string
  @Column({name: 'last_name', nullable:false})
  lastName: string
  @Column({name:'bird_of_date',nullable:true,type:'date'})
  birdOfDate: Date
  @Column({unique:true,nullable:false})
  email: string
  @Column({default: 'user'})
  type: UserType
  @Column({nullable:false})
  password: string
  @Column({nullable:false})
  salt: string
  @ManyToOne(() => PostsEntity, (post: PostsEntity) => post.user,{
    onDelete: 'CASCADE',
    onUpdate:'CASCADE'
  })
  posts: Array<PostsEntity>

  accessToken?:string
}