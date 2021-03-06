import { SendbirdCommon, APP_ID, SendbirdFilters } from './common';
import { Dialogs } from '@nativescript/core';
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

class GroupCreateChannelHandler extends com.sendbird.android.GroupChannel.GroupChannelCreateHandler {
	constructor(resolve, reject) {
		super({
			onResult(groupChannel: com.sendbird.android.GroupChannel, e: com.sendbird.android.SendBirdException) {
				if (e != null) {
					console.log('Sendbird Result Error');
					console.log('e:', e)
					return reject({ error: e });
				}
				console.log('Channel created');
				return resolve({ data: groupChannel });
			},
		});
	}
}

class GroupCreateDirectChannelHandler extends com.sendbird.android.GroupChannel.GroupChannelCreateHandler {
	constructor(resolve, reject) {
		super({
			onResult(groupChannel: com.sendbird.android.GroupChannel, e: com.sendbird.android.SendBirdException) {
				if (e != null) {
					console.log('Sendbird Result Error');
					console.log('e:', e)
					return reject({ error: e });
				}
				console.log('Channel created');
				return resolve({ data: groupChannel });
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
		console.log('channel:', channel);
		console.log('hello');
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

class GroupChannelTotalUnreadMessageCount extends com.sendbird.android.GroupChannel.GroupChannelTotalUnreadMessageCountHandler {
	constructor(resolve, reject) {
		super({
			onResult(count, error) {
				if (error != null) {
					return reject({ error });
				}
				return resolve({ data: count });
			},
		});
	}
}

class RegisterPushTokenHandler extends com.sendbird.android.SendBird.RegisterPushTokenWithStatusHandler {
	constructor(resolve, reject) {
		super({
			onRegistered: (status, exception) => {
				if (exception) {
					console.error('Failed to register device token: ' + exception);
					reject(exception);
				}
				resolve();
			},
		});
	}
}

class GroupChannelHandler extends com.sendbird.android.GroupChannel.GroupChannelGetHandler {
	constructor(resolve, reject) {
		super({
			onResult(channel, error) {
				if (error != null) {
					return reject({ error });
				}
				return resolve(channel);
			},
		});
	}
}

class JoinGroupChannelHandler extends com.sendbird.android.GroupChannel.GroupChannelJoinHandler {
	constructor() {
		super({
			onResult(error) {
				if (error) {
					console.log('error:', error);
				}
			},
		});
	}
}

class LeaveGroupChannelHandler extends com.sendbird.android.GroupChannel.GroupChannelLeaveHandler {
	constructor() {
		super({
			onResult(error) {
				if (error) {
					console.log('error:', error);
				}
			},
		});
	}
}

export class Sendbird extends SendbirdCommon {
	private sendbird = com.sendbird.android.SendBird;
	private sendbirdChannel: com.sendbird.android.OpenChannel;

	init(appId: string, userId: string, username: string, imageUrl: string) {
		this.sendbird.init(appId, application.android.context);
		this.sendbird.updateCurrentUserInfo(username, imageUrl, (() => {}) as any);
	}

	connect(userId: string, nickname: string, profileUrl: string) {
		return new Promise((resolve, reject) => {
			const handler = new myConnectHandler(resolve, reject);
			this.sendbird.connect(userId, handler);
		});
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
			// this.sendbirdChannel.sendUserMessage(message, sendMessageHandler);
		});
	}

	receiveMessage(channelUrl) {
		return new Promise((resolve, reject) => {
			console.log('receiveMessage');
			const channelHandler = new MyChannelHandler();
			console.log('receiveMessage1');
			this.sendbird.addChannelHandler('test', channelHandler);
		});
	}

	getChannelByUrl(channelUrl: string) {
		return new Promise((resolve, reject) => {
			const channelHandler = new ChannelByUrl(resolve, reject);
			com.sendbird.android.OpenChannel.getChannel(channelUrl, channelHandler);
		});
	}

	getTotalUnreadMessages() {
		return new Promise((resolve, reject) => {
			this.sendbird.getTotalUnreadMessageCount(new GroupChannelTotalUnreadMessageCount(resolve, reject));
		});
	}

	registerPushToken(token: string): Promise<void> {
		return new Promise((resolve, reject) => {
			this.sendbird.registerPushTokenForCurrentUser(token, true, new RegisterPushTokenHandler(resolve, reject));
		});
	}

	async joinChannel(channelUrl: string): Promise<void> {
		const groupChannel: com.sendbird.android.GroupChannel = await new Promise((resolve, reject) => {
			const groupChannelHandler = new GroupChannelHandler(resolve, reject);
			com.sendbird.android.GroupChannel.getChannel(channelUrl, groupChannelHandler);
		});
		const joinGroupChannelHandler = new JoinGroupChannelHandler();
		await groupChannel.join(joinGroupChannelHandler);
	}

  async leaveChannel(channelUrl: string): Promise<void> {
		const groupChannel: com.sendbird.android.GroupChannel = await new Promise((resolve, reject) => {
			const groupChannelHandler = new GroupChannelHandler(resolve, reject);
			com.sendbird.android.GroupChannel.getChannel(channelUrl, groupChannelHandler);
		});
		const leaveGroupChannelHandler = new LeaveGroupChannelHandler();
		await groupChannel.leave(leaveGroupChannelHandler);
	}
}

class UserInfo extends com.sendbird.uikit.interfaces.UserInfo {
	constructor(userId: string, username: string, imageUrl: string) {
		super({
			getNickname() {
				return username;
			},
			getProfileUrl(): string {
				return imageUrl;
			},
			getUserId() {
				return userId;
			},
		});
	}
}

class SendBirdUIKitAdapter extends com.sendbird.uikit.adapter.SendBirdUIKitAdapter {
	constructor(appId: string, userId: string, username: string, imageUrl: string) {
		super({
			getAccessToken(): string {
				return '';
			},
			getAppId(): string {
				return appId;
			},
			getUserInfo(): com.sendbird.uikit.interfaces.UserInfo {
				return new UserInfo(userId, username, imageUrl);
			},
		});
	}
}


export class SendbirdUIKit {
	sendbirdUIKit = com.sendbird.uikit.SendBirdUIKit;
	init(appId: string, userId: string, username: string, imageUrl: string) {
		var context = application.android.context;
		this.sendbirdUIKit.init(new SendBirdUIKitAdapter(appId, userId, username, imageUrl), context);
		// var intent = new android.content.Intent(context, (com as any).tns.MainActivity.class);
		// let activity = application.android.foregroundActivity || application.android.startActivity;
		// activity.startActivity(intent);
	}

	launch() {
		var context = application.android.context;
    var intent = new android.content.Intent(context, (com as any).tns.TabViewActivity.class);
		let activity = application.android.foregroundActivity || application.android.startActivity;
		activity.startActivity(intent);
	}

	launchTabs(cb: void, cbNavigate: void, filters: SendbirdFilters) {
		var context = application.android.context;
    var intent = new android.content.Intent(context, (com as any).tns.TabViewActivity.class);
    intent.putExtra("fandoms", filters.fandom.join(','));
		let activity = application.android.foregroundActivity || application.android.startActivity;
		activity.startActivity(intent);
	}

	launchChannel(channelUrl: string) {
		const context = application.android.context;
		const intent = (com as any).tns.CustomChannelActivity.newIntent(context, channelUrl);
		const activity = application.android.foregroundActivity || application.android.startActivity;
		activity.startActivity(intent);
	}

  async createChannel(channelName: string, customType: string): Promise<{ data: com.sendbird.android.OpenChannel } | { error: com.sendbird.android.SendBirdException }> {
		let channelOpts: com.sendbird.android.GroupChannelParams;
    channelOpts = new com.sendbird.android.GroupChannelParams().setName(channelName).setCustomType(customType).setPublic(true).setSuper(true);
		try {
			const { data } = await new Promise((resolve, reject) => {
        const channelHandler = new GroupCreateChannelHandler(resolve, reject);
        debugger
				console.log('channelOpts:', channelOpts)
				com.sendbird.android.GroupChannel.createChannel(channelOpts, channelHandler)
			});
			return { data: data.getUrl() };
		} catch (error) {
      debugger
			return { error };
		}
	}

  async createDirectChannel(userIds: string[]): Promise<{ data: com.sendbird.android.GroupChannel } | { error: com.sendbird.android.SendBirdException }> {
    try {
			const { data } = await new Promise((resolve, reject) => {
        const channelHandler = new GroupCreateDirectChannelHandler(resolve, reject);
        const test = new java.util.ArrayList<string>();
        userIds.forEach(element => {
					test.add(element);
        });
				com.sendbird.android.GroupChannel.createChannelWithUserIds(test, true, channelHandler);
			});
			return { data: data.getUrl() };
		} catch (error) {
			return { error };
		}
  }

  setTheme(style: 'Light' | 'Dark'): void {
		const theme = this.sendbirdUIKit.ThemeMode[style];
		this.sendbirdUIKit.setDefaultThemeMode(theme);
	}

	customChannelPreview() {
		// const channelListAdapter = new com.sendbird.uikit.activities.adapter.ChannelListAdapter.ChannelPreviewHolder(new android.view.View(application.android.context))
		// channelListAdapter.bind()
	}

	private fandomsDialog() {
		const options = {
			title: 'Race selection',
			message: 'Are you sure you want to be a Unicorn?',
			okButtonText: 'Yes',
			cancelButtonText: 'No',
			neutralButtonText: 'Cancel',
		};

		Dialogs.confirm(options).then((result: boolean) => {
			console.log(result);
		});
	}
}
