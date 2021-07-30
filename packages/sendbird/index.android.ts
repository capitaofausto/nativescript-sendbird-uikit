import { SendbirdCommon, APP_ID } from './common';
import * as application from '@nativescript/core/application';
import { OpenChannelParams } from './interfaces/channel';
class myConnectHandler extends com.sendbird.android.SendBird.ConnectHandler {
	constructor(resolve, reject) {
		super({
			onConnected(user: com.sendbird.android.User, e: com.sendbird.android.SendBirdException): void {
				if (e != null) {
					console.log('Sendbird Connection Error');
					return reject({ error: e });
				}
				console.log('User is connected');
				return resolve({ data: user });
			},
		});
	}
}

class CreateChannel extends com.sendbird.android.OpenChannel.OpenChannelCreateHandler {
	constructor(resolve, reject) {
		super({
			onResult(openChannel: com.sendbird.android.OpenChannel, e: com.sendbird.android.SendBirdException) {
				if (e != null) {
					console.log('Sendbird Result Error');
					return reject({ error: e });
				}
				console.log('Channel created');
				return resolve({ data: openChannel });
			},
		});
	}
}

class EnterChannel extends com.sendbird.android.OpenChannel.OpenChannelGetHandler {
	constructor(resolve, reject) {
		super({
			onResult(openChannel: com.sendbird.android.OpenChannel, e: com.sendbird.android.SendBirdException) {
				if (e != null) {
					console.log('Sendbird Result Error');
					return reject({ error: e });
				}
				const enterHandler = new com.sendbird.android.OpenChannel.OpenChannelEnterHandler({
					onResult(e: com.sendbird.android.SendBirdException) {
						if (e != null) {
							return reject({ error: e });
						}
						resolve({ data: openChannel });
					},
				});
				openChannel.enter(enterHandler);
			},
		});
	}
}

class SendMessage extends com.sendbird.android.OpenChannel.SendUserMessageHandler {
	constructor(resolve, reject) {
		super({
			onSent(message: com.sendbird.android.UserMessage, e: com.sendbird.android.SendBirdException) {
				if (e != null) {
					console.log('Send message Error');
					return reject({ error: e });
				}
				return resolve({ data: message });
			},
		});
	}
}

class MyChannelHandler extends com.sendbird.android.SendBird.ChannelHandler {
	// constructor(resolve, reject) {}

  onMessageReceived(channel, message) {
    console.log('channel:', channel)
    console.log('hello')
  }
}

class ChannelByUrl extends com.sendbird.android.OpenChannel.OpenChannelGetHandler {
	constructor(resolve, reject) {
		super({
			onResult(openChannel, e) {
				if (e != null) {
					return reject({ error: e });
				}
				return resolve({ data: openChannel });
			},
		});
	}
}

export class Sendbird extends SendbirdCommon {
	private sendbird = com.sendbird.android.SendBird;
	private sendbirdChannel: com.sendbird.android.OpenChannel;

	init() {
		this.sendbird.init(APP_ID, application.android.context);
	}

	connect(userId: string) {
		return new Promise((resolve, reject) => {
			const handler = new myConnectHandler(resolve, reject);
			this.sendbird.connect(userId, handler);
		});
	}

	async createChannel(channelParams?: OpenChannelParams): Promise<{ data: com.sendbird.android.OpenChannel } | { error: com.sendbird.android.SendBirdException }> {
		let channelOpts: com.sendbird.android.OpenChannelParams;
		if (channelParams) {
			channelOpts = new com.sendbird.android.OpenChannelParams().setName(channelParams.name).setCoverUrl(channelParams.coverUrl);
		}
		try {
			const { data } = await new Promise((resolve, reject) => {
				const channelHandler = new CreateChannel(resolve, reject);
				channelOpts ? com.sendbird.android.OpenChannel.createChannel(channelOpts, channelHandler) : com.sendbird.android.OpenChannel.createChannel(channelHandler);
			});
			this.sendbirdChannel = data;
			return { data: data.getUrl() };
		} catch (error) {
			return { error };
		}
	}

	async enterChannel(channelUrl: string): Promise<{ data: string } | { error: com.sendbird.android.SendBirdException }> {
		try {
			const { data } = await new Promise((resolve, reject) => {
				const enterChannelHandler = new EnterChannel(resolve, reject);
				com.sendbird.android.OpenChannel.getChannel(channelUrl, enterChannelHandler);
			});
			this.sendbirdChannel = data;
			return { data: data.getUrl() };
		} catch (error) {
			return { error };
		}
	}

	sendMessage(message: string) {
		return new Promise((resolve, reject) => {
			const sendMessageHandler = new SendMessage(resolve, reject);
			this.sendbirdChannel.sendUserMessage(message, sendMessageHandler);
		});
	}

	receiveMessage(channelUrl) {
		return new Promise((resolve, reject) => {
      console.log('receiveMessage')
			const channelHandler = new MyChannelHandler();
      console.log('receiveMessage1')
			this.sendbird.addChannelHandler('test', channelHandler);
		});
	}

	getChannelByUrl(channelUrl: string) {
		return new Promise((resolve, reject) => {
			const channelHandler = new ChannelByUrl(resolve, reject);
			com.sendbird.android.OpenChannel.getChannel(channelUrl, channelHandler);
		});
	}
}

class UserInfo extends com.sendbird.uikit.interfaces.UserInfo {
  constructor() {
    super({
      getNickname() {
        // TODO Get User Nickname
        return 'Nickname'
      },
      getProfileUrl(): string {
        return ''
      },
      getUserId() {
        // TODO Get User ID
        return 'ID'
      }
    })
  }
}

class SendBirdUIKitAdapter extends com.sendbird.uikit.adapter.SendBirdUIKitAdapter {
  constructor() {
    super({
      getAppId(): string {
        return APP_ID
      },
      getAccessToken(): string {
        return ''
      },
      getUserInfo(): com.sendbird.uikit.interfaces.UserInfo {
        return new UserInfo()
      }
    })
  }
}

export class SendBirdUIKit extends android.app.Application {

  sendBirdUIKit = com.sendbird.uikit.SendBirdUIKit

  init() {
    super.onCreate()
    const uiKitAdapter = new SendBirdUIKitAdapter()
    this.sendBirdUIKit.init(uiKitAdapter, application.android.context)
  }
}
