import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module';
import { CartModule } from './cart/cart.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TicketsModule,
    CartModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.shared', `.env.${process.env.NODE_ENV}`],
      load: [configuration],
      isGlobal: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
