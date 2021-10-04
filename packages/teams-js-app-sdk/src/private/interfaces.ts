import { FileOpenPreference, TeamInformation } from '../public/interfaces';
/**
 * @privateRemarks
 * Hide from docs
 * --------
 * Information about all members in a chat
 */
export interface ChatMembersInformation {
  members: ThreadMember[];
}

/**
 * @privateRemarks
 * Hide from docs
 * --------
 * Information about a chat member
 */
export interface ThreadMember {
  /**
   * @privateRemarks
   * The member's user principal name in the current tenant.
   */
  upn: string;
}

export enum NotificationTypes {
  fileDownloadStart = 'fileDownloadStart',
  fileDownloadComplete = 'fileDownloadComplete',
}

export interface ShowNotificationParameters {
  message: string;
  notificationType: NotificationTypes;
}

/**
 * @privateRemarks
 * Hide from docs.
 * ------
 */
export enum ViewerActionTypes {
  view = 'view',
  edit = 'edit',
  editNew = 'editNew',
}

/**
 * * @privateRemarks
 * Hide from docs.
 * ------
 * User setting changes that can be subscribed to,
 */
export enum UserSettingTypes {
  /**
   * @privateRemarks
   * Use this key to subscribe to changes in user's file open preference
   */
  fileOpenPreference = 'fileOpenPreference',
  /**
   * @privateRemarks
   * Use this key to subscribe to theme changes
   */
  theme = 'theme',
}

/**
 * @privateRemarks
 * Hide from docs.
 * ------
 */
export interface FilePreviewParameters {
  /**
   * @privateRemarks
   * The developer-defined unique ID for the file.
   */
  entityId: string;

  /**
   * @privateRemarks
   * The display name of the file.
   */
  title: string;

  /**
   * @privateRemarks
   * An optional description of the file.
   */
  description?: string;

  /**
   * @privateRemarks
   * The file extension; e.g. pptx, docx, etc.
   */
  type: string;

  /**
   * @privateRemarks
   * A url to the source of the file, used to open the content in the user's default browser
   */
  objectUrl: string;

  /**
   * @privateRemarks
   * Optional; an alternate self-authenticating url used to preview the file in Mobile clients and offer it for download by the user
   */
  downloadUrl?: string;

  /**
   * @privateRemarks
   * Optional; an alternate url optimized for previewing the file in web and desktop clients
   */
  webPreviewUrl?: string;

  /**
   * @privateRemarks
   * Optional; an alternate url that allows editing of the file in web and desktop clients
   */
  webEditUrl?: string;

  /**
   * @privateRemarks
   * Optional; the base url of the site where the file is hosted
   */
  baseUrl?: string;

  /**
   * @privateRemarks
   * Deprecated; prefer using viewerAction instead
   * Optional; indicates whether the file should be opened in edit mode
   */
  editFile?: boolean;

  /**
   * @privateRemarks
   * Optional; the developer-defined unique ID for the sub-entity to return to when the file stage closes.
   * This field should be used to restore to a specific state within an entity, such as scrolling to or activating a specific piece of content.
   */
  subEntityId?: string;

  /**
   * @privateRemarks
   * Optional; indicates the mode in which file should be opened. Takes precedence over edit mode.
   */
  viewerAction?: ViewerActionTypes;

  /**
   * @privateRemarks
   * Optional; indicates how user prefers to open the file
   */
  fileOpenPreference?: FileOpenPreference;
}

/**
 * @privateRemarks
 * Hide from docs
 * --------
 * Query parameters used when fetching team information
 */
export interface TeamInstanceParameters {
  /**
   * @privateRemarks
   * Flag allowing to select favorite teams only
   */
  favoriteTeamsOnly?: boolean;
}

/**
 * @privateRemarks
 * Hide from docs
 * --------
 * Information on userJoined Teams
 */
export interface UserJoinedTeamsInformation {
  /**
   * @privateRemarks
   * List of team information
   */
  userJoinedTeams: TeamInformation[];
}
