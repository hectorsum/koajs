import { Context } from 'node:vm';
import { 
  Controller,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Patch,
  Ctx
} from 'routing-controllers'

@Controller('/users')
export class UsersController {
  //* localhost:3000/users
  @Get()
  getAll(@Ctx() ctx: Context){
    return 'return all';
  }
  
  //* localhost:3000/users/9
  @Get('/:id')
  getOne(@Param('id') id:number){
    return `getting this users ${id}`
  }

  //* localhost:3000/users/
  @Post()
  post(@Body() user:any){
    return {
      saved: true,
      user
    }
  }
  //* localhost:3000/users/9
  @Patch('/:id')
  put(@Param('id') id:number, @Body() user:any){
    return{
      update: true,
      user,
      id
    }
  }

  @Delete('/:id')
  remove(@Param('id') id:number){
    return `Removing User... ${id}`
  }
} 