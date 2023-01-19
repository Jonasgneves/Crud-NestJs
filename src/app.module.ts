import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://jonasgneves:${process.env.MONGO_PASS}@cluster0.ilfs7uo.mongodb.net/test`,
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
