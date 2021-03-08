import * as Koa from 'koa';
import { DefaultState, DefaultContext, ParameterizedContext } from 'koa';
import * as Router from 'koa-router';
import { config } from 'dotenv';
import {UsersEntity} from './users.entity'
import {PostsEntity} from './posts.entity'
import 'colors';
import { Connection, createConnection } from 'typeorm';
import 'reflect-metadata'

config();

const {DB_HOST,DB_USER,DB_PASS} = process.env;
console.log({DB_HOST,DB_USER,DB_PASS});

export const connectWithDB = async (app: Koa<DefaultState, DefaultContext>) : Promise<void> =>{
  const connection: Connection = await createConnection({
    type:'sqlite',
    database:'./koa.db',
    entities: [UsersEntity, PostsEntity]
  })
  await connection.synchronize(true)
  .then(() => console.log('synchronized! with DB'.green.bold))
  .catch(() => console.error('Failed to sync with DB'.red.bold))
  app.context.db = connection;
}