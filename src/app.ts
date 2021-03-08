import * as Koa from 'koa';
import { DefaultState, DefaultContext, ParameterizedContext } from 'koa';
import { UsersController } from './controllers'
import { createKoaServer } from 'routing-controllers'
import * as Router from 'koa-router';
import {connectWithDB} from './entities';
import 'colors'
const port = 3000;

const startApp = async() => {
  const app: Koa<DefaultState, DefaultContext> = createKoaServer({
    controllers: [UsersController]
  })
  await  connectWithDB(app);  
  app.listen(port).on('listening', () => console.log(`Server Started on port=${port} go to the http://localhost:${port}`.blue.bold));
}
startApp()