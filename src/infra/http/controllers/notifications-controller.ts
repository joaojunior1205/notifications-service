import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { SendNotification } from 'src/app/user-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notification')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) { }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });


    return {
      notification: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
      }
    }
  }
}
