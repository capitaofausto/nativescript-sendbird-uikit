import { SendbirdCommon, APP_ID, dismissCallback } from './common';
import { Utils, Frame } from '@nativescript/core';

export class Sendbird extends SendbirdCommon {

  sendbirdChannel: SBDOpenChannel;
  delegate: OpenChannelChattingViewController;

  connect(userId: string): Promise<{data: SBDUser}> {
    return new Promise((resolve, reject) => {
      SBDMain.connectWithUserIdCompletionHandler(userId, (user, error) => {
            // Handle error.
            if(error) {
              reject(error)
            }
            console.log('User is connected');
            resolve({data: user})
        // The user is connected to Sendbird server.
      })
    })
  }

  createChannel(): Promise<{data: string}> {
    return new Promise((resolve, reject) => {
      SBDOpenChannel.createChannelWithCompletionHandler((openChannel, error) => {
        if(error) {
          console.log('Sendbird Result Error');
          reject(error)
        }
        console.log('Channel created');
        resolve({data: openChannel.channelUrl})
      })
    })
  }

  enterChannel(channelId: string): Promise<{data: string} | {error: any}> {
    return new Promise((resolve, reject) => {
      SBDOpenChannel.getChannelWithUrlCompletionHandler(channelId, (openChannel, error) => {
        if(error) {
          console.log('Sendbird enter channel Error');
          reject(error)
        }
        console.log('Sendbird enter channel success');
        this.sendbirdChannel = openChannel;
        // Call the instance method of the result object in the "openChannel" parameter of the callback method.
        openChannel?.enterChannelWithCompletionHandler( (error) => {
          resolve({ data: openChannel.channelUrl });
        })
      })
    })

  }

  sendMessage(message: string): Promise<{data: SBDUserMessage} | {error: any}> {
    return new Promise((resolve, reject) => {
      this.sendbirdChannel?.sendUserMessageCompletionHandler(message, (message, error) => {
        if(error) {
          console.log('Send message Error');
          reject({ error });
        }
        console.log('MESSAGE SENT', message);

        resolve({ data: message })
        // The message is successfully sent to the channel.
        // The current user can receive messages from other users through the didReceiveMessage() method of an event delegate.
      })
    })
  }

  receiveMessages(channelUrl: string) {
    console.log('Banuba start IOS');
		let topMostFrame = Frame.topmost();
		let viewController: UIViewController = topMostFrame.currentPage && topMostFrame.currentPage.ios;
		this.delegate = OpenChannelChattingViewController.initWithOwner(this.sendbirdChannel, channelUrl);
		this.delegate._owner = new WeakRef(this.sendbirdChannel);
		// this.rtcEngine.delegate = this.delegate;
		this.delegate.viewDidLoad();
  }

  leaveChannel(channelUrl: string) {
    SBDMain.removeChannelDelegateForIdentifier(channelUrl);
  }

  getTotalUnreadMessages() {
    return new Promise((resolve, reject) => {
      SBDMain.getTotalUnreadMessageCountWithCompletionHandler(( totalCount, error) => {
        if(error) {
          console.log('updateUnreadCount Error');
          reject({ error });
        }
        console.log('TOTAL COUNT', totalCount);

        resolve({ data: totalCount })
      })
    })
  }

  registerPushToken(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      SBDMain.registerDevicePushKitTokenUniqueCompletionHandler(new NSString({ string: token }).dataUsingEncoding(NSUTF8StringEncoding), true, (status, error) => {
        if (error) {
          console.error('Failed to register device token: ' + error);
          reject(error)
        }
        resolve();
      });
    });
  }
}

export class SendbirdUIKit {
  delegateUi: ChannelListViewController;

  setCurrentUser(userId: string, nickname: string, profileUrl: string) {
    SBUGlobals.CurrentUser = new SBUUser({userId, nickname, profileUrl });
  }

  init(appId: string, userId: string, nickname: string, profileUrl: string) {
    console.log("UI KIT start IOS");
    SBDMain.initWithApplicationId(appId);
    this.setCurrentUser(userId, nickname, profileUrl);
  }

  launch(callback: dismissCallback) {
    const app = UIApplication.sharedApplication;
    const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
    let viewController = win.rootViewController;
    /* let channelTheme = new SBUChannelTheme({navigationBarTintColor: SBUColorSet.primary300});

    let messageCellTheme = SBUMessageCellTheme(
        backgroundColor: SBUColorSet.background100
        ...
    )

    let messageInputTheme = SBUMessageInputTheme(
        backgroundColor: SBUColorSet.background100
        ...
    )

    SBUTheme.setChannel(channelTheme: channelTheme,
            messageCellTheme: messageCellTheme,
            messageInputTheme: messageInputTheme)
    // Channel theme.
    SBUTheme.channelTheme.backgroundColor = SBUColorSet.background100;

    // Message cell theme.
    SBUTheme.messageCellTheme.backgroundColor = SBUColorSet.background100;

    // Message input theme.
    SBUTheme.messageInputTheme.backgroundColor = SBUColorSet.background100; */

    this.delegateUi = new ChannelListViewController(callback);
    this.delegateUi._owner = new WeakRef(this);
    let naviVC = new UINavigationController({ rootViewController: this.delegateUi });
    naviVC.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
    Utils.ios.getVisibleViewController(viewController).presentViewControllerAnimatedCompletion(naviVC, true, () => { console.log('COMPLETIONNNN'); });
  }
}

@NativeClass()
class OpenChannelChattingViewController extends UIViewController implements SBDChannelDelegate {
	public static ObjCProtocols = [SBDChannelDelegate];
	public static ObjCExposedMethods = {
    viewDidLoad: { returns: interop.types.void, params: [] },
		channelDidReceiveMessage: { returns: SBDBaseMessage, params: [] },
	};

  _owner: WeakRef<SBDBaseChannel>;
  static channelUrl;
	// agoraKit: AgoraRtcEngineKit;

	static new(): OpenChannelChattingViewController {
		return <OpenChannelChattingViewController>super.new(); // calls new() on the NSObject
	}

	public static initWithOwner(owner: SBDBaseChannel, channelUrl): OpenChannelChattingViewController {
		let delegate = <OpenChannelChattingViewController>super.new();
    this.channelUrl = channelUrl;
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

  viewDidLoad() {
		console.log('VIEW DID LOAD', OpenChannelChattingViewController.channelUrl);
		super.viewDidLoad();
    SBDMain.addChannelDelegateIdentifier(this, OpenChannelChattingViewController.channelUrl);
	}

  channelDidReceiveMessage(sender: SBDBaseChannel, message: SBDBaseMessage) {
    console.log('ARRIVED MESSAGE', message);
  }

}

@NativeClass()
class ChannelListViewController extends SBUChannelListViewController {

  public static ObjCExposedMethods = {
    viewDidLoad: { returns: interop.types.void, params: [] },
	};

  _owner: WeakRef<any>;
  dismissCallback: dismissCallback;

  constructor(dismissCalback: dismissCallback) {
    super({channelListQuery: null})
    this.dismissCallback = dismissCalback;
  }

	static new(): ChannelListViewController {
		return <ChannelListViewController>super.new(); // calls new() on the NSObject
	}

	public static initWithOwner(owner: any): ChannelListViewController {
		let delegate = <ChannelListViewController>super.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

  viewDidLoad() {
		console.log('VIEW DID LOAD');
		super.viewDidLoad();

	}

  viewWillDisappear() {
    console.log('VIEW WILLL DISAPPEAR');
		super.viewWillDisappear(true);
    this.dismissCallback();
  }
}
