import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import {SharedProp} from './sharedProp.entity'
import {UsersEntity} from './users.entity'

@Entity({name: 'posts'})
export class PostsEntity extends SharedProp{
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  title:string
  @Column({type:'text'})
  body: string
  @Column({nullable:false,name:'user_id'})
  userId:number
  //* Many posts belongs to one User
  @ManyToOne(() => UsersEntity, (user: UsersEntity) => user.posts)
  @JoinColumn({name: 'user_id'})
  user: UsersEntity
}