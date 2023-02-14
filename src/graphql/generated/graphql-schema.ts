import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Attribute: any;
  Filter: any;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: string;
  Upload: any;
};

export enum ActiveAreaStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

export enum ArticleCategoryEnum {
  Important = 'important',
  Local = 'local',
  Other = 'other'
}

/** ArticleInput */
export type ArticleInput = {
  active_area_id?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['String']>;
  city_ids?: InputMaybe<Array<Scalars['ID']>>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  pdf_file?: InputMaybe<Scalars['String']>;
  prefecture_id?: InputMaybe<Scalars['ID']>;
  publish_time?: InputMaybe<Scalars['ISO8601DateTime']>;
  sender?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ArticleStatusEnum {
  Active = 'active',
  Draft = 'draft',
  Published = 'published'
}

export type BaseObject = {
  __typename?: 'BaseObject';
  graphql_name?: Maybe<Scalars['String']>;
};

/** The connection type for BaseObject. */
export type BaseObjectConnection = {
  __typename?: 'BaseObjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BaseObjectEdge>>>;
  graphql_name?: Maybe<Scalars['String']>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<BaseObject>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BaseObjectEdge = {
  __typename?: 'BaseObjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  graphql_name?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node?: Maybe<BaseObject>;
};

/** CategoryInput */
export type CategoryInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export enum CategoryStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** CharacterInput */
export type CharacterInput = {
  acquisition_date?: InputMaybe<Scalars['ISO8601Date']>;
  character_number?: InputMaybe<Scalars['String']>;
  gacha_id?: InputMaybe<Scalars['ID']>;
  height?: InputMaybe<Scalars['Int']>;
  hobbies?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['Upload']>;
  status?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export enum CityStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** ConnectSpotImageInput */
export type ConnectSpotImageInput = {
  _destroy?: InputMaybe<Scalars['String']>;
  connect_spot_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export enum ConnectSpotImageStatusEnum {
  Active = 'active',
  Inactive = 'inactive'
}

/** ConnectSpotInput */
export type ConnectSpotInput = {
  access?: InputMaybe<Scalars['String']>;
  active_area_id?: InputMaybe<Scalars['Int']>;
  benefit?: InputMaybe<Scalars['String']>;
  connect_spot_images_attributes?: InputMaybe<Array<ConnectSpotImageInput>>;
  connect_spot_sdgs_attributes?: InputMaybe<Array<ConnectSpotSdgInput>>;
  content?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['String']>;
  display_end?: InputMaybe<Scalars['ISO8601Date']>;
  display_start?: InputMaybe<Scalars['ISO8601Date']>;
  email?: InputMaybe<Scalars['String']>;
  exchange_point?: InputMaybe<Scalars['Boolean']>;
  facebook?: InputMaybe<Scalars['String']>;
  holiday?: InputMaybe<Scalars['String']>;
  home_page?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lat?: InputMaybe<Scalars['Float']>;
  line?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  post_code?: InputMaybe<Scalars['String']>;
  spot_genres_attributes?: InputMaybe<Array<SpotGenreInput>>;
  spot_point_exchanges_attributes?: InputMaybe<Array<SpotPointExchangeInput>>;
  spot_type?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  town?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  use_point?: InputMaybe<Scalars['Boolean']>;
};

/** ConnectSpotSdgInput */
export type ConnectSpotSdgInput = {
  _destroy?: InputMaybe<Scalars['String']>;
  connect_spot_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  sdg_id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['String']>;
};

export enum ConnectSpotSpotTypeEnum {
  Dynamic = 'dynamic',
  Statics = 'statics'
}

export enum ConnectSpotStatusEnum {
  Active = 'active',
  Inactive = 'inactive'
}

/** CustomObjectType */
export type CustomObject = RecordInterface & {
  __typename?: 'CustomObject';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** Autogenerated input type of DeleteArticle */
export type DeleteArticleInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteArticle */
export type DeleteArticlePayload = {
  __typename?: 'DeleteArticlePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Return resource destroy success  */
  success?: Maybe<Scalars['Boolean']>;
};

/** Autogenerated input type of DeleteCategory */
export type DeleteCategoryInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteCategory */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

/** Autogenerated input type of DeleteConnectSpot */
export type DeleteConnectSpotInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteConnectSpot */
export type DeleteConnectSpotPayload = {
  __typename?: 'DeleteConnectSpotPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Return resource destroy success  */
  success?: Maybe<Scalars['Boolean']>;
};

/** Autogenerated input type of DeleteDiaryCheck */
export type DeleteDiaryCheckInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteDiaryCheck */
export type DeleteDiaryCheckPayload = {
  __typename?: 'DeleteDiaryCheckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Return resource destroy success  */
  success?: Maybe<Scalars['Boolean']>;
};

/** Autogenerated input type of DeleteGenre */
export type DeleteGenreInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteGenre */
export type DeleteGenrePayload = {
  __typename?: 'DeleteGenrePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Return resource destroy success  */
  success?: Maybe<Scalars['Boolean']>;
};

/** Autogenerated input type of DeleteJob */
export type DeleteJobInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteJob */
export type DeleteJobPayload = {
  __typename?: 'DeleteJobPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Jobs>;
};

/** Autogenerated input type of DeleteSpotPointExchange */
export type DeleteSpotPointExchangeInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteSpotPointExchange */
export type DeleteSpotPointExchangePayload = {
  __typename?: 'DeleteSpotPointExchangePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Return resource destroy success  */
  success?: Maybe<Scalars['Boolean']>;
};

/** Autogenerated input type of DestroyLanguage */
export type DestroyLanguageInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DestroyLanguage */
export type DestroyLanguagePayload = {
  __typename?: 'DestroyLanguagePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Languages>;
};

/** DiaryCheckInput */
export type DiaryCheckInput = {
  co2_diet_value?: InputMaybe<Scalars['Float']>;
  diary_check_sdgs_attributes?: InputMaybe<Array<DiaryCheckSdgInput>>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  point?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

/** DiaryCheckSdgInput */
export type DiaryCheckSdgInput = {
  diary_check_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  sdg_id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['String']>;
};

export enum DiaryCheckSdgStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

export enum DiaryCheckStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** GenreInput */
export type GenreInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status: Scalars['String'];
};

export enum GenreStatusEnum {
  Active = 'active',
  Inactive = 'inactive'
}

/** Autogenerated input type of InsertArticle */
export type InsertArticleInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: ArticleInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['Upload']>;
  image2?: InputMaybe<Scalars['Upload']>;
  pdf_file?: InputMaybe<Scalars['Upload']>;
};

/** Autogenerated return type of InsertArticle */
export type InsertArticlePayload = {
  __typename?: 'InsertArticlePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Articles>;
};

/** Autogenerated input type of InsertCategory */
export type InsertCategoryInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: CategoryInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of InsertCategory */
export type InsertCategoryPayload = {
  __typename?: 'InsertCategoryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Categories>;
};

/** Autogenerated input type of InsertCharacter */
export type InsertCharacterInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  character: CharacterInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of InsertCharacter */
export type InsertCharacterPayload = {
  __typename?: 'InsertCharacterPayload';
  /** Record Type for mutation response */
  character: Characters;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of InsertConnectSpot */
export type InsertConnectSpotInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: ConnectSpotInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['Upload']>>;
};

/** Autogenerated return type of InsertConnectSpot */
export type InsertConnectSpotPayload = {
  __typename?: 'InsertConnectSpotPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Connect_Spots>;
};

/** Autogenerated input type of InsertDairyCheck */
export type InsertDairyCheckInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: DiaryCheckInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of InsertDairyCheck */
export type InsertDairyCheckPayload = {
  __typename?: 'InsertDairyCheckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Diary_Checks>;
};

/** Autogenerated input type of InsertGenre */
export type InsertGenreInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: GenreInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Upload']>;
};

/** Autogenerated return type of InsertGenre */
export type InsertGenrePayload = {
  __typename?: 'InsertGenrePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Genres>;
};

/** Autogenerated input type of InsertJob */
export type InsertJobInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: JobInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of InsertJob */
export type InsertJobPayload = {
  __typename?: 'InsertJobPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Jobs>;
};

/** Autogenerated input type of InsertLanguage */
export type InsertLanguageInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: LanguageInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of InsertLanguage */
export type InsertLanguagePayload = {
  __typename?: 'InsertLanguagePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Languages>;
};

/** Autogenerated input type of InsertMirai */
export type InsertMiraiInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: MiraiInput;
  banner?: InputMaybe<Array<Scalars['Upload']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  pdf_info?: InputMaybe<Scalars['Upload']>;
};

/** Autogenerated return type of InsertMirai */
export type InsertMiraiPayload = {
  __typename?: 'InsertMiraiPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Mirais>;
};

/** Autogenerated input type of InsertMission */
export type InsertMissionInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: MissionInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated input type of InsertMissionMaster */
export type InsertMissionMasterInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: MissionMasterInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of InsertMissionMaster */
export type InsertMissionMasterPayload = {
  __typename?: 'InsertMissionMasterPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Mission_Masters>;
};

/** Autogenerated return type of InsertMission */
export type InsertMissionPayload = {
  __typename?: 'InsertMissionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Missions>;
};

/** Autogenerated input type of InsertStampEvent */
export type InsertStampEventInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: StampEventInput;
  banner?: InputMaybe<Scalars['Upload']>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Upload']>;
  pdf_info?: InputMaybe<Scalars['Upload']>;
  stamp_reward_images?: InputMaybe<Array<Scalars['Upload']>>;
  stamp_spot_images?: InputMaybe<Array<Scalars['Upload']>>;
};

/** Autogenerated return type of InsertStampEvent */
export type InsertStampEventPayload = {
  __typename?: 'InsertStampEventPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Stamp_Events>;
};

/** Autogenerated input type of InsertStampIconTemplate */
export type InsertStampIconTemplateInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: StampIconTemplateInput;
  background?: InputMaybe<Scalars['Upload']>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Upload']>;
};

/** Autogenerated return type of InsertStampIconTemplate */
export type InsertStampIconTemplatePayload = {
  __typename?: 'InsertStampIconTemplatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Stamp_Icon_Templates>;
};

/** Autogenerated input type of InsertUser */
export type InsertUserInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: UserInput;
  avatar?: InputMaybe<Scalars['Upload']>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of InsertUser */
export type InsertUserPayload = {
  __typename?: 'InsertUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Users>;
};

/** JobInput */
export type JobInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export enum JobStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** LanguageInput */
export type LanguageInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status: Scalars['String'];
};

export enum LanguageStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

export enum MiraiCategoryEnum {
  All = 'all',
  Disaster = 'disaster',
  Event = 'event',
  Orange = 'orange',
  Town = 'town'
}

/** MiraiImageInput */
export type MiraiImageInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  mirai_id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['String']>;
};

/** MiraiInput */
export type MiraiInput = {
  active_area_ids?: InputMaybe<Array<Scalars['ID']>>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  display_end_date?: InputMaybe<Scalars['ISO8601Date']>;
  email?: InputMaybe<Scalars['String']>;
  fee?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  maximum_users?: InputMaybe<Scalars['Int']>;
  mirai_images_attributes?: InputMaybe<Array<MiraiImageInput>>;
  mirai_sdgs_attributes?: InputMaybe<Array<MiraiSdgInput>>;
  name?: InputMaybe<Scalars['String']>;
  organize_place?: InputMaybe<Scalars['String']>;
  organizer?: InputMaybe<Scalars['String']>;
  other_skill?: InputMaybe<Scalars['String']>;
  pdf_info?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  point?: InputMaybe<Scalars['Int']>;
  recruit_end_date?: InputMaybe<Scalars['ISO8601Date']>;
  recruit_start_date?: InputMaybe<Scalars['ISO8601Date']>;
  remark?: InputMaybe<Scalars['String']>;
  reward?: InputMaybe<Scalars['String']>;
  skill_ids?: InputMaybe<Array<Scalars['ID']>>;
  start_date?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  target_person?: InputMaybe<Scalars['String']>;
};

/** MiraiSdgInput */
export type MiraiSdgInput = {
  id?: InputMaybe<Scalars['ID']>;
  mirai_id?: InputMaybe<Scalars['ID']>;
  sdg_id?: InputMaybe<Scalars['ID']>;
};

export enum MiraiStatusEnum {
  Active = 'active',
  Close = 'close',
  InActive = 'in_active'
}

/** MissionInput */
export type MissionInput = {
  end_date?: InputMaybe<Scalars['ISO8601DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  is_continous?: InputMaybe<Scalars['Boolean']>;
  mission_master_id?: InputMaybe<Scalars['ID']>;
  mission_type?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  number_of_times?: InputMaybe<Scalars['Int']>;
  point?: InputMaybe<Scalars['Int']>;
  reward_content?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['ISO8601DateTime']>;
  status?: InputMaybe<Scalars['String']>;
};

/** MissionMasterInput */
export type MissionMasterInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status: Scalars['String'];
  trigger: Scalars['String'];
};

export enum MissionMasterStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

export enum MissionMasterTriggerEnum {
  CheckinConnectspot = 'checkin_connectspot',
  DiaryCo2Diet = 'diary_co2_diet',
  JoinMirai = 'join_mirai',
  JoinSos = 'join_sos',
  JoinStamp = 'join_stamp',
  Login = 'login'
}

export enum MissionStatusEnum {
  Active = 'active',
  Close = 'close',
  Inactive = 'inactive'
}

export enum MissionTypeEnum {
  Challenge = 'challenge',
  Daily = 'daily',
  Normal = 'normal'
}

/** Define all mutation for client */
export type Mutation = {
  __typename?: 'Mutation';
  delete_article?: Maybe<DeleteArticlePayload>;
  delete_category?: Maybe<DeleteCategoryPayload>;
  delete_connect_spot?: Maybe<DeleteConnectSpotPayload>;
  delete_diary_check?: Maybe<DeleteDiaryCheckPayload>;
  delete_genre?: Maybe<DeleteGenrePayload>;
  delete_job?: Maybe<DeleteJobPayload>;
  delete_spot_point_exchange?: Maybe<DeleteSpotPointExchangePayload>;
  destroy_language?: Maybe<DestroyLanguagePayload>;
  insert_article?: Maybe<InsertArticlePayload>;
  insert_category?: Maybe<InsertCategoryPayload>;
  insert_character?: Maybe<InsertCharacterPayload>;
  insert_connect_spot?: Maybe<InsertConnectSpotPayload>;
  insert_diary_check?: Maybe<InsertDairyCheckPayload>;
  insert_genre?: Maybe<InsertGenrePayload>;
  insert_job?: Maybe<InsertJobPayload>;
  insert_language?: Maybe<InsertLanguagePayload>;
  insert_mirai?: Maybe<InsertMiraiPayload>;
  insert_mission?: Maybe<InsertMissionPayload>;
  insert_mission_master?: Maybe<InsertMissionMasterPayload>;
  insert_stamp_event?: Maybe<InsertStampEventPayload>;
  insert_stamp_icon_template?: Maybe<InsertStampIconTemplatePayload>;
  insert_user?: Maybe<InsertUserPayload>;
  sign_in?: Maybe<SignInMutationPayload>;
  sign_out?: Maybe<SignOutMutationPayload>;
  update_article?: Maybe<UpdateArticlePayload>;
  update_category?: Maybe<UpdateCategoryPayload>;
  update_connect_spot?: Maybe<UpdateConnectSpotPayload>;
  update_diary_check?: Maybe<UpdateDairyCheckPayload>;
  update_genre?: Maybe<UpdateGenrePayload>;
  update_job?: Maybe<UpdateJobPayload>;
  update_language?: Maybe<UpdateLanguagePayload>;
  update_mirai?: Maybe<UpdateMiraiPayload>;
  update_mission?: Maybe<UpdateMissionPayload>;
  update_mission_master?: Maybe<UpdateMissionMasterPayload>;
  update_profile_user?: Maybe<UpdateProfileUserPayload>;
  update_stamp_event?: Maybe<UpdateStampEventPayload>;
  update_stamp_icon_template?: Maybe<UpdateStampIconTemplatePayload>;
  update_user?: Maybe<UpdateUserPayload>;
  update_user_mirai?: Maybe<UpdateUserMiraiPayload>;
};


/** Define all mutation for client */
export type MutationDelete_ArticleArgs = {
  input: DeleteArticleInput;
};


/** Define all mutation for client */
export type MutationDelete_CategoryArgs = {
  input: DeleteCategoryInput;
};


/** Define all mutation for client */
export type MutationDelete_Connect_SpotArgs = {
  input: DeleteConnectSpotInput;
};


/** Define all mutation for client */
export type MutationDelete_Diary_CheckArgs = {
  input: DeleteDiaryCheckInput;
};


/** Define all mutation for client */
export type MutationDelete_GenreArgs = {
  input: DeleteGenreInput;
};


/** Define all mutation for client */
export type MutationDelete_JobArgs = {
  input: DeleteJobInput;
};


/** Define all mutation for client */
export type MutationDelete_Spot_Point_ExchangeArgs = {
  input: DeleteSpotPointExchangeInput;
};


/** Define all mutation for client */
export type MutationDestroy_LanguageArgs = {
  input: DestroyLanguageInput;
};


/** Define all mutation for client */
export type MutationInsert_ArticleArgs = {
  input: InsertArticleInput;
};


/** Define all mutation for client */
export type MutationInsert_CategoryArgs = {
  input: InsertCategoryInput;
};


/** Define all mutation for client */
export type MutationInsert_CharacterArgs = {
  input: InsertCharacterInput;
};


/** Define all mutation for client */
export type MutationInsert_Connect_SpotArgs = {
  input: InsertConnectSpotInput;
};


/** Define all mutation for client */
export type MutationInsert_Diary_CheckArgs = {
  input: InsertDairyCheckInput;
};


/** Define all mutation for client */
export type MutationInsert_GenreArgs = {
  input: InsertGenreInput;
};


/** Define all mutation for client */
export type MutationInsert_JobArgs = {
  input: InsertJobInput;
};


/** Define all mutation for client */
export type MutationInsert_LanguageArgs = {
  input: InsertLanguageInput;
};


/** Define all mutation for client */
export type MutationInsert_MiraiArgs = {
  input: InsertMiraiInput;
};


/** Define all mutation for client */
export type MutationInsert_MissionArgs = {
  input: InsertMissionInput;
};


/** Define all mutation for client */
export type MutationInsert_Mission_MasterArgs = {
  input: InsertMissionMasterInput;
};


/** Define all mutation for client */
export type MutationInsert_Stamp_EventArgs = {
  input: InsertStampEventInput;
};


/** Define all mutation for client */
export type MutationInsert_Stamp_Icon_TemplateArgs = {
  input: InsertStampIconTemplateInput;
};


/** Define all mutation for client */
export type MutationInsert_UserArgs = {
  input: InsertUserInput;
};


/** Define all mutation for client */
export type MutationSign_InArgs = {
  input: SignInMutationInput;
};


/** Define all mutation for client */
export type MutationSign_OutArgs = {
  input: SignOutMutationInput;
};


/** Define all mutation for client */
export type MutationUpdate_ArticleArgs = {
  input: UpdateArticleInput;
};


/** Define all mutation for client */
export type MutationUpdate_CategoryArgs = {
  input: UpdateCategoryInput;
};


/** Define all mutation for client */
export type MutationUpdate_Connect_SpotArgs = {
  input: UpdateConnectSpotInput;
};


/** Define all mutation for client */
export type MutationUpdate_Diary_CheckArgs = {
  input: UpdateDairyCheckInput;
};


/** Define all mutation for client */
export type MutationUpdate_GenreArgs = {
  input: UpdateGenreInput;
};


/** Define all mutation for client */
export type MutationUpdate_JobArgs = {
  input: UpdateJobInput;
};


/** Define all mutation for client */
export type MutationUpdate_LanguageArgs = {
  input: UpdateLanguageInput;
};


/** Define all mutation for client */
export type MutationUpdate_MiraiArgs = {
  input: UpdateMiraiInput;
};


/** Define all mutation for client */
export type MutationUpdate_MissionArgs = {
  input: UpdateMissionInput;
};


/** Define all mutation for client */
export type MutationUpdate_Mission_MasterArgs = {
  input: UpdateMissionMasterInput;
};


/** Define all mutation for client */
export type MutationUpdate_Profile_UserArgs = {
  input: UpdateProfileUserInput;
};


/** Define all mutation for client */
export type MutationUpdate_Stamp_EventArgs = {
  input: UpdateStampEventInput;
};


/** Define all mutation for client */
export type MutationUpdate_Stamp_Icon_TemplateArgs = {
  input: UpdateStampIconTemplateInput;
};


/** Define all mutation for client */
export type MutationUpdate_UserArgs = {
  input: UpdateUserInput;
};


/** Define all mutation for client */
export type MutationUpdate_User_MiraiArgs = {
  input: UpdateUserMiraiInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export enum PrefectureStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** Define all resolver for client */
export type Query = {
  __typename?: 'Query';
  active_area: Active_Areas;
  active_areas: Array<Active_Areas>;
  /** Define aggregate to count total records for Common::ActiveAreas */
  active_areas_aggregate: BaseObjectConnection;
  article: Articles;
  articles: Array<Articles>;
  /** Define aggregate to count total records for Admin::NewNotices */
  articles_aggregate: BaseObjectConnection;
  categories: Array<Categories>;
  /** Define aggregate to count total records for Admin::Categories */
  categories_aggregate: BaseObjectConnection;
  category: Categories;
  cities: Array<Cities>;
  /** Define aggregate to count total records for Common::Cities */
  cities_aggregate: BaseObjectConnection;
  connect_spots: Array<Connect_Spots>;
  /** Define aggregate to count total records for Admin::ConnectSpots */
  connect_spots_aggregate: BaseObjectConnection;
  diary_checks: Array<Diary_Checks>;
  /** Define aggregate to count total records for Admin::DiaryChecks */
  diary_checks_aggregate: BaseObjectConnection;
  genres: Array<Genres>;
  /** Define aggregate to count total records for Common::Genres */
  genres_aggregate: BaseObjectConnection;
  job: Jobs;
  jobs: Array<Jobs>;
  /** Define aggregate to count total records for Admin::Jobs */
  jobs_aggregate: BaseObjectConnection;
  languages: Array<Languages>;
  /** Define aggregate to count total records for Common::Languages */
  languages_aggregate: BaseObjectConnection;
  mirai: Mirais;
  mirai_images: Array<Mirai_Images>;
  /** Define aggregate to count total records for Admin::MiraiImages */
  mirai_images_aggregate: BaseObjectConnection;
  mirai_sdgs: Array<Mirai_Sdgs>;
  /** Define aggregate to count total records for Admin::MiraiSdgs */
  mirai_sdgs_aggregate: BaseObjectConnection;
  mirais: Array<Mirais>;
  /** Define aggregate to count total records for Admin::Mirais */
  mirais_aggregate: BaseObjectConnection;
  mission_masters: Array<Mission_Masters>;
  /** Define aggregate to count total records for Admin::MissionMasters */
  mission_masters_aggregate: BaseObjectConnection;
  missions: Array<Missions>;
  /** Define aggregate to count total records for Admin::Missions */
  missions_aggregate: BaseObjectConnection;
  /** Get User health daily of current user */
  my_latest_user_health_daily: User_Health_Dailies;
  /** Get profile of current user */
  my_profile: Users;
  organization: Organizations;
  organizations: Array<Organizations>;
  /** Define aggregate to count total records for Common::Organizations */
  organizations_aggregate: BaseObjectConnection;
  post_code: Array<Streets>;
  prefectures: Array<Prefectures>;
  /** Define aggregate to count total records for Common::Prefectures */
  prefectures_aggregate: BaseObjectConnection;
  qr_code: Qr_Codes;
  /** Define aggregate to count total records for Common::QrCode */
  qr_code_aggregate: BaseObjectConnection;
  sdgs: Array<Sdgs>;
  /** Define aggregate to count total records for Common::Sdg */
  sdgs_aggregate: BaseObjectConnection;
  search_post_codes: Array<Streets>;
  skill: Skills;
  skills: Array<Skills>;
  /** Define aggregate to count total records for Common::Skills */
  skills_aggregate: BaseObjectConnection;
  spot_point_exchanges: Array<Spot_Point_Exchanges>;
  /** Define aggregate to count total records for Client::SpotPointExchanges */
  spot_point_exchanges_aggregate: BaseObjectConnection;
  stamp_events: Array<Stamp_Events>;
  /** Define aggregate to count total records for Admin::StampEvents */
  stamp_events_aggregate: BaseObjectConnection;
  stamp_icon_templates: Array<Stamp_Icon_Templates>;
  /** Define aggregate to count total records for Admin::StampIconTemplates */
  stamp_icon_templates_aggregate: BaseObjectConnection;
  stamp_rewards: Array<Stamp_Rewards>;
  /** Define aggregate to count total records for Admin::StampRewards */
  stamp_rewards_aggregate: BaseObjectConnection;
  stamp_spots: Array<Stamp_Spots>;
  /** Define aggregate to count total records for Admin::StampSpots */
  stamp_spots_aggregate: BaseObjectConnection;
  street_by_post_code: Streets;
  streets: Array<Streets>;
  /** Define aggregate to count total records for Common::Streets */
  streets_aggregate: BaseObjectConnection;
  user: Users;
  user_mirais: Array<User_Mirais>;
  /** Define aggregate to count total records for Admin::UserMirais */
  user_mirais_aggregate: BaseObjectConnection;
  user_missions: Array<User_Missions>;
  /** Define aggregate to count total records for Admin::UserMissions */
  user_missions_aggregate: BaseObjectConnection;
  users: Array<Users>;
  /** Define aggregate to count total records for Admin::Users */
  users_aggregate: BaseObjectConnection;
};


/** Define all resolver for client */
export type QueryActive_AreaArgs = {
  id: Scalars['ID'];
};


/** Define all resolver for client */
export type QueryActive_AreasArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  exclude_current_user?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_type?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryActive_Areas_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryArticleArgs = {
  id: Scalars['ID'];
};


/** Define all resolver for client */
export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryArticles_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryCategories_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


/** Define all resolver for client */
export type QueryCitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryCities_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryConnect_SpotsArgs = {
  column_name?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_type?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryConnect_Spots_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryDiary_ChecksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_field?: InputMaybe<Scalars['String']>;
  order_type?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryDiary_Checks_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryGenresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryGenres_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryJobArgs = {
  id: Scalars['ID'];
};


/** Define all resolver for client */
export type QueryJobsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryJobs_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryLanguagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryLanguages_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMiraiArgs = {
  id: Scalars['ID'];
};


/** Define all resolver for client */
export type QueryMirai_ImagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMirai_Images_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMirai_SdgsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMirai_Sdgs_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMiraisArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMirais_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMission_MastersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMission_Masters_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryMissions_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


/** Define all resolver for client */
export type QueryOrganizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryOrganizations_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryPost_CodeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryPrefecturesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryPrefectures_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryQr_CodeArgs = {
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryQr_Code_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QuerySdgsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QuerySdgs_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QuerySearch_Post_CodesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QuerySkillArgs = {
  id: Scalars['ID'];
};


/** Define all resolver for client */
export type QuerySkillsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QuerySkills_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QuerySpot_Point_ExchangesArgs = {
  connect_spot_id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QuerySpot_Point_Exchanges_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStamp_EventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStamp_Events_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStamp_Icon_TemplatesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStamp_Icon_Templates_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStamp_RewardsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStamp_Rewards_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStamp_SpotsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStamp_Spots_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStreet_By_Post_CodeArgs = {
  post_code: Scalars['String'];
};


/** Define all resolver for client */
export type QueryStreetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryStreets_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryUserArgs = {
  id: Scalars['ID'];
};


/** Define all resolver for client */
export type QueryUser_MiraisArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryUser_Mirais_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryUser_MissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryUser_Missions_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};


/** Define all resolver for client */
export type QueryUsers_AggregateArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['Filter']>;
};

export type RecordInterface = {
  created_at: Scalars['ISO8601DateTime'];
  updated_at: Scalars['ISO8601DateTime'];
};

export enum SdgStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** Input params for api sign in */
export type SignInInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Autogenerated input type of SignInMutation */
export type SignInMutationInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: SignInInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  /** Device token for notification */
  device_token?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of SignInMutation */
export type SignInMutationPayload = {
  __typename?: 'SignInMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<Users>;
};

/** Autogenerated input type of SignOutMutation */
export type SignOutMutationInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes?: InputMaybe<Array<Scalars['Attribute']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of SignOutMutation */
export type SignOutMutationPayload = {
  __typename?: 'SignOutMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

export enum SkillStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** SpotGenreInput */
export type SpotGenreInput = {
  _destroy?: InputMaybe<Scalars['String']>;
  genre_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  spotable_id?: InputMaybe<Scalars['ID']>;
  spotable_type?: InputMaybe<Scalars['String']>;
};

export enum SpotPointExchangeConvertTypeEnum {
  Exchange = 'exchange',
  Receive = 'receive'
}

/** SpotPointExchangeInput */
export type SpotPointExchangeInput = {
  _destroy?: InputMaybe<Scalars['String']>;
  connect_spot_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  convert_type?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['ISO8601Date']>;
  id?: InputMaybe<Scalars['ID']>;
  start_date?: InputMaybe<Scalars['ISO8601Date']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
};

export enum StampEventArrangeEnum {
  Arrange = 'arrange',
  NoArrange = 'no_arrange'
}

/** StampEventInput */
export type StampEventInput = {
  active_area_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  arrange?: InputMaybe<Scalars['Int']>;
  assign_admin_id?: InputMaybe<Scalars['ID']>;
  background?: InputMaybe<Scalars['String']>;
  banner?: InputMaybe<Scalars['String']>;
  border_color?: InputMaybe<Scalars['String']>;
  can_export?: InputMaybe<Scalars['Boolean']>;
  city_id?: InputMaybe<Scalars['ID']>;
  contact_address?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['ISO8601DateTime']>;
  header_background?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  maximum_reward?: InputMaybe<Scalars['Int']>;
  maximum_stamp?: InputMaybe<Scalars['Int']>;
  note?: InputMaybe<Scalars['String']>;
  number_of_stamp?: InputMaybe<Scalars['Int']>;
  open_date?: InputMaybe<Scalars['ISO8601DateTime']>;
  organization_name?: InputMaybe<Scalars['String']>;
  pdf_info?: InputMaybe<Scalars['String']>;
  prefecture_id?: InputMaybe<Scalars['ID']>;
  progress?: InputMaybe<Scalars['String']>;
  reward_content?: InputMaybe<Scalars['String']>;
  reward_overview?: InputMaybe<Scalars['String']>;
  reward_type?: InputMaybe<Scalars['String']>;
  sdg_ids?: InputMaybe<Array<Scalars['ID']>>;
  stamp_rewards_attributes?: InputMaybe<Array<StampRewardInput>>;
  stamp_spot_ids?: InputMaybe<Scalars['ID']>;
  stamp_spots_attributes?: InputMaybe<Array<StampSpotInput>>;
  start_date?: InputMaybe<Scalars['ISO8601DateTime']>;
  status?: InputMaybe<Scalars['String']>;
  survey_link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_color?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  view_statistics?: InputMaybe<Scalars['Boolean']>;
};

export enum StampEventProgressEnum {
  Closed = 'closed',
  Comming = 'comming',
  Open = 'open',
  OutOfReward = 'out_of_reward'
}

export enum StampEventRewardTypeEnum {
  Direct = 'direct',
  Online = 'online'
}

export enum StampEventStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** StampIconTemplateInput */
export type StampIconTemplateInput = {
  background?: InputMaybe<Scalars['String']>;
  border_color?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export enum StampIconTemplateStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** StampRewardInput */
export type StampRewardInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  stamp_count?: InputMaybe<Scalars['Int']>;
  stamp_event_id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum StampRewardStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** StampSpotInput */
export type StampSpotInput = {
  access?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Scalars['String']>;
  holiday_date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  line?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  sdg_value?: InputMaybe<Scalars['Int']>;
  spot_genres_attributes?: InputMaybe<Array<SpotGenreInput>>;
  stamp_event_id?: InputMaybe<Scalars['ID']>;
  stamp_spot_sdgs_attributes?: InputMaybe<Array<StampSpotSdgInput>>;
  status?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** StampSpotSdgInput */
export type StampSpotSdgInput = {
  id?: InputMaybe<Scalars['ID']>;
  sdg_id?: InputMaybe<Scalars['ID']>;
  stamp_spot_id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['String']>;
};

export enum StampSpotSdgStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

export enum StampSpotStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** Autogenerated input type of UpdateArticle */
export type UpdateArticleInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: ArticleInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image1?: InputMaybe<Scalars['Upload']>;
  image2?: InputMaybe<Scalars['Upload']>;
  pdf_file?: InputMaybe<Scalars['Upload']>;
};

/** Autogenerated return type of UpdateArticle */
export type UpdateArticlePayload = {
  __typename?: 'UpdateArticlePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Articles>;
};

/** Autogenerated input type of UpdateCategory */
export type UpdateCategoryInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: CategoryInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of UpdateCategory */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Categories>;
};

/** Autogenerated input type of UpdateConnectSpot */
export type UpdateConnectSpotInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: ConnectSpotInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: InputMaybe<Array<Scalars['Upload']>>;
};

/** Autogenerated return type of UpdateConnectSpot */
export type UpdateConnectSpotPayload = {
  __typename?: 'UpdateConnectSpotPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Connect_Spots>;
};

/** Autogenerated input type of UpdateDairyCheck */
export type UpdateDairyCheckInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: DiaryCheckInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of UpdateDairyCheck */
export type UpdateDairyCheckPayload = {
  __typename?: 'UpdateDairyCheckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Diary_Checks>;
};

/** Autogenerated input type of UpdateGenre */
export type UpdateGenreInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: GenreInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Upload']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of UpdateGenre */
export type UpdateGenrePayload = {
  __typename?: 'UpdateGenrePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Genres>;
};

/** Autogenerated input type of UpdateJob */
export type UpdateJobInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: JobInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of UpdateJob */
export type UpdateJobPayload = {
  __typename?: 'UpdateJobPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Jobs>;
};

/** Autogenerated input type of UpdateLanguage */
export type UpdateLanguageInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: LanguageInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of UpdateLanguage */
export type UpdateLanguagePayload = {
  __typename?: 'UpdateLanguagePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Languages>;
};

/** Autogenerated input type of UpdateMirai */
export type UpdateMiraiInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: MiraiInput;
  banner?: InputMaybe<Array<Scalars['Upload']>>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  pdf_info?: InputMaybe<Scalars['Upload']>;
};

/** Autogenerated return type of UpdateMirai */
export type UpdateMiraiPayload = {
  __typename?: 'UpdateMiraiPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Mirais>;
};

/** Autogenerated input type of UpdateMission */
export type UpdateMissionInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: MissionInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated input type of UpdateMissionMaster */
export type UpdateMissionMasterInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: MissionMasterInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of UpdateMissionMaster */
export type UpdateMissionMasterPayload = {
  __typename?: 'UpdateMissionMasterPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Mission_Masters>;
};

/** Autogenerated return type of UpdateMission */
export type UpdateMissionPayload = {
  __typename?: 'UpdateMissionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Missions>;
};

/** Autogenerated input type of UpdateProfileUser */
export type UpdateProfileUserInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: UserInput;
  avatar?: InputMaybe<Scalars['Upload']>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateProfileUser */
export type UpdateProfileUserPayload = {
  __typename?: 'UpdateProfileUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Users>;
};

/** Autogenerated input type of UpdateStampEvent */
export type UpdateStampEventInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: StampEventInput;
  banner?: InputMaybe<Scalars['Upload']>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Upload']>;
  id: Scalars['ID'];
  pdf_info?: InputMaybe<Scalars['Upload']>;
  stamp_reward_images?: InputMaybe<Array<Scalars['Upload']>>;
  stamp_spot_images?: InputMaybe<Array<Scalars['Upload']>>;
};

/** Autogenerated return type of UpdateStampEvent */
export type UpdateStampEventPayload = {
  __typename?: 'UpdateStampEventPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Stamp_Events>;
};

/** Autogenerated input type of UpdateStampIconTemplate */
export type UpdateStampIconTemplateInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: StampIconTemplateInput;
  background?: InputMaybe<Scalars['Upload']>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Upload']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** Autogenerated return type of UpdateStampIconTemplate */
export type UpdateStampIconTemplatePayload = {
  __typename?: 'UpdateStampIconTemplatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<Stamp_Icon_Templates>;
};

/** Autogenerated input type of UpdateUser */
export type UpdateUserInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: UserInput;
  avatar?: InputMaybe<Scalars['Upload']>;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated input type of UpdateUserMirai */
export type UpdateUserMiraiInput = {
  attribute?: InputMaybe<Scalars['Attribute']>;
  attributes: UserMiraiInput;
  /** A unique identifier for the client performing the mutation. */
  client_mutation_id?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of UpdateUserMirai */
export type UpdateUserMiraiPayload = {
  __typename?: 'UpdateUserMiraiPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  /** Record Type for mutation response */
  returning?: Maybe<User_Mirais>;
};

/** Autogenerated return type of UpdateUser */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  graphql_name?: Maybe<Scalars['String']>;
  returning?: Maybe<Users>;
};

export enum UserGenderEnum {
  Female = 'female',
  Male = 'male',
  Other = 'other'
}

export enum UserHealthDailyStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** UserInput */
export type UserInput = {
  active_area_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  address_remark?: InputMaybe<Scalars['String']>;
  admin_notification?: InputMaybe<Scalars['Boolean']>;
  avatar?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['ISO8601Date']>;
  city_id?: InputMaybe<Scalars['ID']>;
  co2_diet?: InputMaybe<Scalars['Float']>;
  current_sign_in_at?: InputMaybe<Scalars['ISO8601DateTime']>;
  current_sign_in_ip?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  exp?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  jti?: InputMaybe<Scalars['String']>;
  language_ids?: InputMaybe<Array<Scalars['ID']>>;
  last_sign_in_at?: InputMaybe<Scalars['ISO8601DateTime']>;
  last_sign_in_ip?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  mirai_notification?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_kana?: InputMaybe<Scalars['String']>;
  name_katakana?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Array<Scalars['String']>>;
  occupation?: InputMaybe<Scalars['String']>;
  organization_id?: InputMaybe<Scalars['ID']>;
  other_notification?: InputMaybe<Scalars['Boolean']>;
  phone_number?: InputMaybe<Scalars['String']>;
  post_code?: InputMaybe<Scalars['String']>;
  prefecture_id?: InputMaybe<Scalars['ID']>;
  provider?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['Int']>;
  remember_created_at?: InputMaybe<Scalars['ISO8601DateTime']>;
  reset_password_sent_at?: InputMaybe<Scalars['ISO8601DateTime']>;
  reset_password_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  sign_in_count?: InputMaybe<Scalars['Int']>;
  skill_ids?: InputMaybe<Array<Scalars['ID']>>;
  sos_agreement?: InputMaybe<Scalars['Boolean']>;
  sos_notification?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
};

/** UserMiraiInput */
export type UserMiraiInput = {
  address?: InputMaybe<Scalars['String']>;
  approved_date?: InputMaybe<Scalars['ISO8601DateTime']>;
  city_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  language_ids?: InputMaybe<Array<Scalars['ID']>>;
  mirai_id?: InputMaybe<Scalars['ID']>;
  personal_skill_ids?: InputMaybe<Array<Scalars['ID']>>;
  phone_number?: InputMaybe<Scalars['String']>;
  post_code?: InputMaybe<Scalars['String']>;
  prefecture_id?: InputMaybe<Scalars['ID']>;
  progress?: InputMaybe<Scalars['String']>;
  request_date?: InputMaybe<Scalars['ISO8601DateTime']>;
  status?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
};

export enum UserMiraiProgressEnum {
  Apply = 'apply',
  Approve = 'approve',
  Reject = 'reject'
}

export enum UserMiraiStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

export enum UserMissionProgressEnum {
  Completed = 'completed',
  ReceivedReward = 'received_reward',
  Uncompleted = 'uncompleted'
}

export enum UserMissionStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

export enum UserRoleEnum {
  Admin = 'admin',
  Guest = 'guest',
  SuperAdmin = 'super_admin',
  User = 'user'
}

export enum UserStampRewardStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

export enum UserStatusEnum {
  Active = 'active',
  Deactive = 'deactive'
}

/** ActiveAreaType */
export type Active_Areas = RecordInterface & {
  __typename?: 'active_areas';
  banner?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['ID']>;
  click_count?: Maybe<Scalars['Int']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['ID']>;
  /**
   *     active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<ActiveAreaStatusEnum>;
  town?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
};

export type Aggregate = {
  __typename?: 'aggregate';
  count: Scalars['Int'];
  graphql_name?: Maybe<Scalars['String']>;
};

/** ArticleType */
export type Articles = RecordInterface & {
  __typename?: 'articles';
  active_area_id?: Maybe<Scalars['ID']>;
  /**
   *     local: 1, # Category Local
   *
   *   important: 2, # Category Important
   *
   *   other: 5, # Category Other
   *
   */
  category?: Maybe<ArticleCategoryEnum>;
  city_ids: Array<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  created_by?: Maybe<Scalars['ID']>;
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image1?: Maybe<Scalars['String']>;
  image2?: Maybe<Scalars['String']>;
  pdf_file?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['ID']>;
  publish_time?: Maybe<Scalars['ISO8601DateTime']>;
  sender?: Maybe<Scalars['String']>;
  /**
   *     draft: 0, # Status Draft
   *
   *   active: 1, # Status Active
   *
   *   published: 2, # Status Published
   *
   */
  status?: Maybe<ArticleStatusEnum>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
  user_articles_count?: Maybe<Scalars['Int']>;
  user_ids: Array<Scalars['ID']>;
};

/** CategoryType */
export type Categories = RecordInterface & {
  __typename?: 'categories';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /**
   *         active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<CategoryStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** CharacterType */
export type Characters = RecordInterface & {
  __typename?: 'characters';
  acquisition_date?: Maybe<Scalars['ISO8601Date']>;
  character_number?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  gacha_id?: Maybe<Scalars['ID']>;
  graphql_name?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  hobbies?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
  weight?: Maybe<Scalars['Int']>;
};

/** CityType */
export type Cities = RecordInterface & {
  __typename?: 'cities';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  name_kana?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['ID']>;
  /**
   *         active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<CityStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** ConnectSpotImageType */
export type Connect_Spot_Images = RecordInterface & {
  __typename?: 'connect_spot_images';
  connect_spot_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  /**
   *     inactive: 0, # Status Active
   *
   *   active: 1, # Status Deactive
   *
   */
  status?: Maybe<ConnectSpotImageStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** ConnectSpotType */
export type Connect_Spots = RecordInterface & {
  __typename?: 'connect_spots';
  access?: Maybe<Scalars['String']>;
  active_area_id?: Maybe<Scalars['ID']>;
  benefit?: Maybe<Scalars['String']>;
  checked?: Maybe<Scalars['Boolean']>;
  connect_spot_images?: Maybe<Array<Connect_Spot_Images>>;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  discount?: Maybe<Scalars['String']>;
  display_end?: Maybe<Scalars['ISO8601Date']>;
  display_start?: Maybe<Scalars['ISO8601Date']>;
  email?: Maybe<Scalars['String']>;
  exchange_point?: Maybe<Scalars['Boolean']>;
  facebook?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Genres>>;
  graphql_name?: Maybe<Scalars['String']>;
  holiday?: Maybe<Scalars['String']>;
  home_page?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['Float']>;
  line?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  post_code?: Maybe<Scalars['String']>;
  sdg_ids?: Maybe<Array<Scalars['ID']>>;
  sdgs?: Maybe<Array<Sdgs>>;
  spot_checked?: Maybe<Scalars['Boolean']>;
  spot_point_exchanges?: Maybe<Array<Spot_Point_Exchanges>>;
  /**
   *     statics: 0, # Spot Type Statics
   *
   *   dynamic: 1, # Spot Type Dynamic
   *
   */
  spot_type?: Maybe<ConnectSpotSpotTypeEnum>;
  /**
   *     inactive: 0, # Status Inactive
   *
   *   active: 1, # Status Active
   *
   */
  status?: Maybe<ConnectSpotStatusEnum>;
  town?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
  use_point?: Maybe<Scalars['Boolean']>;
};

/** DiaryCheckSdgType */
export type Diary_Check_Sdgs = RecordInterface & {
  __typename?: 'diary_check_sdgs';
  created_at: Scalars['ISO8601DateTime'];
  diary_check_id?: Maybe<Scalars['ID']>;
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  sdg_id?: Maybe<Scalars['ID']>;
  /**
   *     active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<DiaryCheckSdgStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** DiaryCheckType */
export type Diary_Checks = RecordInterface & {
  __typename?: 'diary_checks';
  check_favorite?: Maybe<Scalars['Boolean']>;
  co2_diet_value?: Maybe<Scalars['Float']>;
  created_at: Scalars['ISO8601DateTime'];
  diary_check_sdgs?: Maybe<Array<Diary_Check_Sdgs>>;
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Int']>;
  sdg_icon?: Maybe<Scalars['String']>;
  sdg_ids?: Maybe<Array<Scalars['ID']>>;
  /**
   *     active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<DiaryCheckStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** GenreType */
export type Genres = RecordInterface & {
  __typename?: 'genres';
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /**
   *   inactive: 0, # Status inactive
   *
   *   active: 1, # Status active
   *
   */
  status?: Maybe<GenreStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** JobType */
export type Jobs = RecordInterface & {
  __typename?: 'jobs';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /**
   *         active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<JobStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** LanguageType */
export type Languages = RecordInterface & {
  __typename?: 'languages';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /**
   *         active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<LanguageStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** MiraiImageType */
export type Mirai_Images = RecordInterface & {
  __typename?: 'mirai_images';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  mirai_id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** MiraiSdgType */
export type Mirai_Sdgs = RecordInterface & {
  __typename?: 'mirai_sdgs';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mirai_id?: Maybe<Scalars['ID']>;
  sdg_id?: Maybe<Scalars['ID']>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** MiraiType */
export type Mirais = RecordInterface & {
  __typename?: 'mirais';
  active_area_ids?: Maybe<Array<Scalars['ID']>>;
  approve?: Maybe<Scalars['Int']>;
  /**
   *     in_active: 0, # Mirai Type in active
   *
   *   active: 1, # Mirai Type active
   *
   *   close: 2, # Mirai Type close
   *
   */
  category?: Maybe<MiraiCategoryEnum>;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  display_end_date?: Maybe<Scalars['ISO8601DateTime']>;
  email?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Int']>;
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  maximum_users?: Maybe<Scalars['Int']>;
  mirai_images?: Maybe<Array<Mirai_Images>>;
  mirai_sdgs?: Maybe<Array<Mirai_Sdgs>>;
  mirai_sdgs_attributes?: Maybe<Array<Mirai_Sdgs>>;
  name?: Maybe<Scalars['String']>;
  organize_place?: Maybe<Scalars['String']>;
  organizer?: Maybe<Scalars['String']>;
  other_skill?: Maybe<Scalars['String']>;
  pdf_info?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Int']>;
  recruit_end_date?: Maybe<Scalars['ISO8601Date']>;
  recruit_start_date?: Maybe<Scalars['ISO8601Date']>;
  recruit_status?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  request?: Maybe<Scalars['Int']>;
  reward?: Maybe<Scalars['String']>;
  sdg_icon?: Maybe<Array<CustomObject>>;
  skill_ids?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<CustomObject>>;
  start_date?: Maybe<Scalars['String']>;
  /**
   *     comming: 0, # Mirai Type Comming
   *
   *   recruiting: 1, # Mirai Type Recruiting
   *
   *   end_recruit: 2, # Mirai Type End_recruit
   *
   *   inprogress: 3, # Mirai Type Inprogress
   *
   *   completed: 4, # Mirai Type Completed
   *
   */
  status?: Maybe<MiraiStatusEnum>;
  target_person?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
  user_mirai_progress?: Maybe<Scalars['Int']>;
};

/** MissionMasterType */
export type Mission_Masters = RecordInterface & {
  __typename?: 'mission_masters';
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /**
   *     active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<MissionMasterStatusEnum>;
  /**
   *     login: 1, # Trigger Login
   *
   *   checkin_connectspot: 2, # Trigger Checkin Connectspot
   *
   *   join_mirai: 3, # Trigger Join Mirai
   *
   *   join_sos: 4, # Trigger Join Sos
   *
   *   diary_co2_diet: 5, # Trigger Diary Co2 Diet
   *
   *   join_stamp: 6, # Trigger Join Stamp
   *
   */
  trigger?: Maybe<MissionMasterTriggerEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** MissionType */
export type Missions = RecordInterface & {
  __typename?: 'missions';
  created_at: Scalars['ISO8601DateTime'];
  end_date?: Maybe<Scalars['ISO8601DateTime']>;
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_continous?: Maybe<Scalars['Boolean']>;
  mission_master?: Maybe<Mission_Masters>;
  mission_master_id?: Maybe<Scalars['ID']>;
  /**
   *     daily: 0, # Mission Type Active
   *
   *   challenge: 1, # Mission Type Challenge
   *
   *   normal: 2, # Mission Type Normal
   *
   */
  mission_type?: Maybe<MissionTypeEnum>;
  name?: Maybe<Scalars['String']>;
  number_of_times?: Maybe<Scalars['Int']>;
  participants?: Maybe<Scalars['Int']>;
  point?: Maybe<Scalars['Int']>;
  reward_content?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['ISO8601DateTime']>;
  /**
   *     inactive: 0, # Status Inactive
   *
   *   active: 1, # Status Acttive
   *
   *   close: 2 # Status Close
   *
   */
  status?: Maybe<MissionStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** OrganizationType */
export type Organizations = RecordInterface & {
  __typename?: 'organizations';
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** PrefectureType */
export type Prefectures = RecordInterface & {
  __typename?: 'prefectures';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  name_kana?: Maybe<Scalars['String']>;
  /**
   *         active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<PrefectureStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** QrCodeType */
export type Qr_Codes = RecordInterface & {
  __typename?: 'qr_codes';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  status?: Maybe<Scalars['Int']>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** SdgType */
export type Sdgs = RecordInterface & {
  __typename?: 'sdgs';
  content: Scalars['String'];
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  icon: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order: Scalars['Int'];
  /**
   * active: 1, # Status Active
   *
   *   deactive: 0, # Status Deactive
   *
   */
  status?: Maybe<SdgStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** SkillType */
export type Skills = RecordInterface & {
  __typename?: 'skills';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /**
   *         active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<SkillStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** SpotPointExchangeType */
export type Spot_Point_Exchanges = RecordInterface & {
  __typename?: 'spot_point_exchanges';
  connect_spot_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  /**
   *     receive: 0, # Convert Type Receive
   *
   *   exchange: 1, # Covert Type Exchange
   *
   */
  convert_type?: Maybe<SpotPointExchangeConvertTypeEnum>;
  created_at: Scalars['ISO8601DateTime'];
  end_date?: Maybe<Scalars['ISO8601Date']>;
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  start_date?: Maybe<Scalars['ISO8601Date']>;
  /**
   *     inactive: 0, # Status Active
   *
   *   active: 1, # Status Deactive
   *
   */
  status?: Maybe<ConnectSpotStatusEnum>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
  value?: Maybe<Scalars['Int']>;
};

/** StampEventType */
export type Stamp_Events = RecordInterface & {
  __typename?: 'stamp_events';
  active_area_id?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
  /**
   *     no_arrange: 0, # Arrange no arrange
   *
   *   arrange: 1, # Arrange arrange
   *
   */
  arrange?: Maybe<StampEventArrangeEnum>;
  assign_admin_id?: Maybe<Scalars['ID']>;
  background?: Maybe<Scalars['String']>;
  banner?: Maybe<Scalars['String']>;
  border_color?: Maybe<Scalars['String']>;
  can_export?: Maybe<Scalars['Boolean']>;
  check_user_stamp_event?: Maybe<Scalars['Boolean']>;
  city_id?: Maybe<Scalars['ID']>;
  contact_address?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  count_stamp_rally_card_of_user?: Maybe<Scalars['Int']>;
  created_at: Scalars['ISO8601DateTime'];
  end_date?: Maybe<Scalars['ISO8601DateTime']>;
  graphql_name?: Maybe<Scalars['String']>;
  header_background?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  maximum_reward?: Maybe<Scalars['Int']>;
  maximum_stamp?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  number_of_stamp?: Maybe<Scalars['Int']>;
  open_date?: Maybe<Scalars['ISO8601DateTime']>;
  organization_name?: Maybe<Scalars['String']>;
  pdf_info?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['ID']>;
  /**
   *     comming: 0, # Progress comming
   *
   *   open: 1, # Progress open
   *
   *   out_of_reward: 2, # Progress out of reward
   *
   *   closed: 3, # Progress closed
   *
   */
  progress?: Maybe<StampEventProgressEnum>;
  reward_content?: Maybe<Scalars['String']>;
  reward_overview?: Maybe<Scalars['String']>;
  /**
   *     online: 0, # Reward type online
   *
   *   direct: 1, # Reward type direct
   *
   */
  reward_type?: Maybe<StampEventRewardTypeEnum>;
  sdg_ids?: Maybe<Array<Scalars['ID']>>;
  stamp_rewards?: Maybe<Array<Stamp_Rewards>>;
  stamp_rewards_count?: Maybe<Scalars['Int']>;
  stamp_spot_ids?: Maybe<Scalars['ID']>;
  stamp_spots?: Maybe<Array<Stamp_Spots>>;
  stamp_spots_count?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['ISO8601DateTime']>;
  /**
   *     active: 0, # Status active
   *
   *   deactive: 1, # Status deactive
   *
   */
  status?: Maybe<StampEventStatusEnum>;
  survey_link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_color?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
  url?: Maybe<Scalars['String']>;
  user_joined?: Maybe<Scalars['Boolean']>;
  users_count?: Maybe<Scalars['Int']>;
  view_statistics?: Maybe<Scalars['Boolean']>;
};

/** StampIconTemplateType */
export type Stamp_Icon_Templates = RecordInterface & {
  __typename?: 'stamp_icon_templates';
  background?: Maybe<Scalars['String']>;
  border_color?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /**
   *     "active": 0, # Status active
   *
   *   "deactive": 1, # Status deactive
   *
   */
  status?: Maybe<StampIconTemplateStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** StampRewardImageType */
export type Stamp_Reward_Images = RecordInterface & {
  __typename?: 'stamp_reward_images';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  stamp_reward_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** StampRewardType */
export type Stamp_Rewards = RecordInterface & {
  __typename?: 'stamp_rewards';
  check_user_stamp_reward?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  people_received?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  stamp_count?: Maybe<Scalars['Int']>;
  stamp_event?: Maybe<Stamp_Events>;
  stamp_event_id?: Maybe<Scalars['ID']>;
  stamp_rally_card_count?: Maybe<Scalars['Int']>;
  stamp_reward_images?: Maybe<Array<Stamp_Reward_Images>>;
  /**
   *     active: 0, # Status active
   *
   *   deactive: 1, # Status deactive
   *
   */
  status?: Maybe<StampRewardStatusEnum>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
  user_stamp_rewards?: Maybe<Array<User_Stamp_Rewards>>;
  user_stamp_rewards_count?: Maybe<Scalars['Int']>;
};

/** StampSpotSdgType */
export type Stamp_Spot_Sdgs = RecordInterface & {
  __typename?: 'stamp_spot_sdgs';
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  sdg_id?: Maybe<Scalars['ID']>;
  stamp_spot_id?: Maybe<Scalars['ID']>;
  status?: Maybe<StampSpotSdgStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** StampSpotType */
export type Stamp_Spots = RecordInterface & {
  __typename?: 'stamp_spots';
  access?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  created_at: Scalars['ISO8601DateTime'];
  description?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Genres>>;
  graphql_name?: Maybe<Scalars['String']>;
  holiday_date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']>>;
  lat?: Maybe<Scalars['Float']>;
  line?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  sdg_icons?: Maybe<Array<Scalars['String']>>;
  sdg_value?: Maybe<Scalars['Int']>;
  stamp_event_id?: Maybe<Scalars['ID']>;
  stamp_spot_sdgs?: Maybe<Array<Stamp_Spot_Sdgs>>;
  stamped_at?: Maybe<Scalars['ISO8601Date']>;
  /**
   *     active: 0, # Status active
   *
   *   deactive: 1, # Status deactive
   *
   */
  status?: Maybe<StampSpotStatusEnum>;
  status_stamped?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
  url?: Maybe<Scalars['String']>;
};

/** StreetType */
export type Streets = RecordInterface & {
  __typename?: 'streets';
  city?: Maybe<Cities>;
  city_id?: Maybe<Scalars['ID']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  name_kana?: Maybe<Scalars['String']>;
  post_code?: Maybe<Scalars['String']>;
  prefecture?: Maybe<Prefectures>;
  prefecture_id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
};

/** UserHealthDailyType */
export type User_Health_Dailies = RecordInterface & {
  __typename?: 'user_health_dailies';
  blood_pressure?: Maybe<Scalars['String']>;
  blood_pressure_max?: Maybe<Scalars['Int']>;
  blood_pressure_min?: Maybe<Scalars['Int']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  sleep_time_end?: Maybe<Scalars['ISO8601DateTime']>;
  sleep_time_start?: Maybe<Scalars['ISO8601DateTime']>;
  /**
   *     active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<UserHealthDailyStatusEnum>;
  time_sleep?: Maybe<Scalars['Float']>;
  updated_at: Scalars['ISO8601DateTime'];
  user_health_setting_id?: Maybe<Scalars['ID']>;
  user_id?: Maybe<Scalars['ID']>;
  walk_expect?: Maybe<Scalars['Int']>;
  walk_num?: Maybe<Scalars['Int']>;
  walk_num_from_app?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
};

/** UserMiraiType */
export type User_Mirais = RecordInterface & {
  __typename?: 'user_mirais';
  address?: Maybe<Scalars['String']>;
  approved_date?: Maybe<Scalars['ISO8601DateTime']>;
  city_id?: Maybe<Scalars['ID']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language_ids?: Maybe<Array<Scalars['ID']>>;
  mirai_id?: Maybe<Scalars['ID']>;
  personal_skill_ids?: Maybe<Array<Scalars['ID']>>;
  phone_number?: Maybe<Scalars['String']>;
  post_code?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['ID']>;
  /**
   *     apply: 0, # Progress Apply
   *
   *   approve: 1, # Progress Approve
   *
   *   reject: 2, # Progress Reject
   *
   */
  progress?: Maybe<UserMiraiProgressEnum>;
  request_date?: Maybe<Scalars['ISO8601DateTime']>;
  /**
   *     active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<UserMiraiStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['ID']>;
};

/** UserMissionType */
export type User_Missions = RecordInterface & {
  __typename?: 'user_missions';
  counter?: Maybe<Scalars['Int']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mission?: Maybe<Missions>;
  mission_id?: Maybe<Scalars['ID']>;
  /**
   *     open: 0, # Progress Open
   *
   *   inprogress: 1, # Progress Inprogress
   *
   *   completed: 2, # Progress Completed
   *
   */
  progress?: Maybe<UserMissionProgressEnum>;
  /**
   *     active: 0, # Status Active
   *
   *   deactive: 1, # Status Deactive
   *
   */
  status?: Maybe<UserMissionStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['ID']>;
};

/** UserStampRewardType */
export type User_Stamp_Rewards = RecordInterface & {
  __typename?: 'user_stamp_rewards';
  active_area_id?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['ID']>;
  created_at: Scalars['ISO8601DateTime'];
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  post_code?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['ID']>;
  stamp_reward_id?: Maybe<Scalars['ID']>;
  /**
   * deactive: 0, # Status Deactive
   *
   *   active: 1, # Status Active
   *
   */
  status?: Maybe<UserStampRewardStatusEnum>;
  updated_at: Scalars['ISO8601DateTime'];
  user_id?: Maybe<Scalars['ID']>;
};

/** UserType */
export type Users = RecordInterface & {
  __typename?: 'users';
  active_area?: Maybe<Active_Areas>;
  active_area_id?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
  address_remark?: Maybe<Scalars['String']>;
  admin_notification?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['ISO8601Date']>;
  city?: Maybe<CustomObject>;
  city_id?: Maybe<Scalars['ID']>;
  co2_diet?: Maybe<Scalars['Float']>;
  created_at: Scalars['ISO8601DateTime'];
  current_sign_in_at?: Maybe<Scalars['ISO8601DateTime']>;
  current_sign_in_ip?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  encrypted_password?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  gender?: Maybe<UserGenderEnum>;
  graphql_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jti?: Maybe<Scalars['String']>;
  language_ids?: Maybe<Array<Scalars['ID']>>;
  languages?: Maybe<Array<CustomObject>>;
  last_sign_in_at?: Maybe<Scalars['ISO8601DateTime']>;
  last_sign_in_ip?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  mirai_notification?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_kana?: Maybe<Scalars['String']>;
  name_katakana?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  notifications?: Maybe<Array<Scalars['String']>>;
  occupation?: Maybe<Scalars['String']>;
  organization?: Maybe<CustomObject>;
  organization_id?: Maybe<Scalars['ID']>;
  other_notification?: Maybe<Scalars['Boolean']>;
  phone_number?: Maybe<Scalars['String']>;
  post_code?: Maybe<Scalars['String']>;
  prefecture?: Maybe<CustomObject>;
  prefecture_id?: Maybe<Scalars['ID']>;
  provider?: Maybe<Scalars['String']>;
  remember_created_at?: Maybe<Scalars['ISO8601DateTime']>;
  reset_password_sent_at?: Maybe<Scalars['ISO8601DateTime']>;
  reset_password_token?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  sign_in_count: Scalars['Int'];
  skill_ids?: Maybe<Array<Scalars['ID']>>;
  skills?: Maybe<Array<CustomObject>>;
  sos_agreement?: Maybe<Scalars['Boolean']>;
  sos_notification?: Maybe<Scalars['Boolean']>;
  status?: Maybe<UserStatusEnum>;
  tree_level?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  updated_at: Scalars['ISO8601DateTime'];
};

export type AdminSignInMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AdminSignInMutation = { __typename?: 'Mutation', sign_in?: { __typename?: 'SignInMutationPayload', result?: boolean | null | undefined, token?: string | null | undefined, user?: { __typename?: 'users', id: string, avatar?: string | null | undefined, name?: string | null | undefined, occupation?: string | null | undefined, role?: UserRoleEnum | null | undefined, email: string, nickname?: string | null | undefined, phone_number?: string | null | undefined, birthday?: any | null | undefined, name_katakana?: string | null | undefined, gender?: UserGenderEnum | null | undefined, active_area_id?: string | null | undefined, address?: string | null | undefined, organization_id?: string | null | undefined, skill_ids?: Array<string> | null | undefined, language_ids?: Array<string> | null | undefined } | null | undefined } | null | undefined };

export type UpdateArticleMutationVariables = Exact<{
  articleUpdateData: ArticleInput;
  id: Scalars['ID'];
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', update_article?: { __typename?: 'UpdateArticlePayload', clientMutationId?: string | null | undefined, graphql_name?: string | null | undefined, returning?: { __typename?: 'articles', category?: ArticleCategoryEnum | null | undefined, city_ids: Array<string>, content?: string | null | undefined, created_at: string, created_by?: string | null | undefined, graphql_name?: string | null | undefined, id: string, image1?: string | null | undefined, image2?: string | null | undefined, pdf_file?: string | null | undefined, prefecture_id?: string | null | undefined, publish_time?: string | null | undefined, sender?: string | null | undefined, status?: ArticleStatusEnum | null | undefined, title?: string | null | undefined, updated_at: string, user_ids: Array<string> } | null | undefined } | null | undefined };

export type UpdateUserMiraiMutationVariables = Exact<{
  attributes: UserMiraiInput;
  id: Scalars['ID'];
}>;


export type UpdateUserMiraiMutation = { __typename?: 'Mutation', update_user_mirai?: { __typename?: 'UpdateUserMiraiPayload', returning?: { __typename?: 'user_mirais', id: string, progress?: UserMiraiProgressEnum | null | undefined } | null | undefined } | null | undefined };

export type ActiveAreaQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveAreaQuery = { __typename?: 'Query', active_areas: Array<{ __typename?: 'active_areas', id: string, name?: string | null | undefined }> };

export type CitiesQueryVariables = Exact<{
  where?: InputMaybe<Scalars['Filter']>;
}>;


export type CitiesQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'cities', id: string, name?: string | null | undefined }> };

export type GenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'genres', id: string, name?: string | null | undefined }> };

export type LanguageQueryVariables = Exact<{ [key: string]: never; }>;


export type LanguageQuery = { __typename?: 'Query', languages: Array<{ __typename?: 'languages', id: string, name?: string | null | undefined }> };

export type MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQuery = { __typename?: 'Query', my_profile: { __typename?: 'users', id: string, avatar?: string | null | undefined, name?: string | null | undefined, occupation?: string | null | undefined, role?: UserRoleEnum | null | undefined, email: string, nickname?: string | null | undefined, phone_number?: string | null | undefined, birthday?: any | null | undefined, name_katakana?: string | null | undefined, gender?: UserGenderEnum | null | undefined, active_area_id?: string | null | undefined, address?: string | null | undefined, organization_id?: string | null | undefined, skill_ids?: Array<string> | null | undefined, language_ids?: Array<string> | null | undefined } };

export type OrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationQuery = { __typename?: 'Query', organizations: Array<{ __typename?: 'organizations', id: string, name?: string | null | undefined }> };

export type PrefecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type PrefecturesQuery = { __typename?: 'Query', prefectures: Array<{ __typename?: 'prefectures', id: string, name?: string | null | undefined }> };

export type SearchPostCodeQueryVariables = Exact<{
  where: Scalars['Filter'];
}>;


export type SearchPostCodeQuery = { __typename?: 'Query', post_code: Array<{ __typename?: 'streets', city_id?: string | null | undefined, prefecture_id?: string | null | undefined, created_at: string, graphql_name?: string | null | undefined, id: string, name?: string | null | undefined, name_kana?: string | null | undefined, post_code?: string | null | undefined, status?: string | null | undefined, updated_at: string }> };

export type SkillQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'skills', id: string, name?: string | null | undefined }> };

export type StampRewardsQueryVariables = Exact<{
  where?: InputMaybe<Scalars['Filter']>;
}>;


export type StampRewardsQuery = { __typename?: 'Query', stamp_rewards: Array<{ __typename?: 'stamp_rewards', id: string }> };

export type StampSpotsQueryVariables = Exact<{
  where?: InputMaybe<Scalars['Filter']>;
}>;


export type StampSpotsQuery = { __typename?: 'Query', stamp_spots: Array<{ __typename?: 'stamp_spots', id: string }> };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'users', id: string, name?: string | null | undefined } };

export type UserMiraisQueryVariables = Exact<{ [key: string]: never; }>;


export type UserMiraisQuery = { __typename?: 'Query', user_mirais: Array<{ __typename?: 'user_mirais', address?: string | null | undefined, approved_date?: string | null | undefined, city_id?: string | null | undefined, created_at: string, graphql_name?: string | null | undefined, id: string, language_ids?: Array<string> | null | undefined, mirai_id?: string | null | undefined, personal_skill_ids?: Array<string> | null | undefined, phone_number?: string | null | undefined, post_code?: string | null | undefined, prefecture_id?: string | null | undefined, progress?: UserMiraiProgressEnum | null | undefined, request_date?: string | null | undefined, status?: UserMiraiStatusEnum | null | undefined, updated_at: string, user_id?: string | null | undefined, user?: { __typename?: 'users', active_area_id?: string | null | undefined, address?: string | null | undefined, address_remark?: string | null | undefined, admin_notification?: boolean | null | undefined, avatar?: string | null | undefined, birthday?: any | null | undefined, city_id?: string | null | undefined, co2_diet?: number | null | undefined, created_at: string, current_sign_in_at?: string | null | undefined, current_sign_in_ip?: string | null | undefined, email: string, encrypted_password?: string | null | undefined, exp?: number | null | undefined, gender?: UserGenderEnum | null | undefined, graphql_name?: string | null | undefined, id: string, jti?: string | null | undefined, language_ids?: Array<string> | null | undefined, last_sign_in_at?: string | null | undefined, last_sign_in_ip?: string | null | undefined, level?: number | null | undefined, mirai_notification?: boolean | null | undefined, name?: string | null | undefined, name_kana?: string | null | undefined, name_katakana?: string | null | undefined, nickname?: string | null | undefined, notifications?: Array<string> | null | undefined, occupation?: string | null | undefined, organization_id?: string | null | undefined, other_notification?: boolean | null | undefined, phone_number?: string | null | undefined, post_code?: string | null | undefined, prefecture_id?: string | null | undefined, provider?: string | null | undefined, remember_created_at?: string | null | undefined, reset_password_sent_at?: string | null | undefined, reset_password_token?: string | null | undefined, role?: UserRoleEnum | null | undefined, sign_in_count: number, skill_ids?: Array<string> | null | undefined, sos_notification?: boolean | null | undefined, status?: UserStatusEnum | null | undefined, tree_level?: number | null | undefined, uid?: string | null | undefined, updated_at: string } | null | undefined }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'users', id: string, name?: string | null | undefined }> };


export const AdminSignInDocument = gql`
    mutation adminSignIn($username: String!, $password: String!) {
  sign_in(input: {attributes: {username: $username, password: $password}}) {
    result
    token
    user {
      id
      avatar
      name
      occupation
      role
      email
      nickname
      phone_number
      birthday
      name_katakana
      gender
      active_area_id
      address
      organization_id
      skill_ids
      language_ids
    }
  }
}
    `;
export type AdminSignInMutationFn = Apollo.MutationFunction<AdminSignInMutation, AdminSignInMutationVariables>;

/**
 * __useAdminSignInMutation__
 *
 * To run a mutation, you first call `useAdminSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminSignInMutation, { data, loading, error }] = useAdminSignInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAdminSignInMutation(baseOptions?: Apollo.MutationHookOptions<AdminSignInMutation, AdminSignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminSignInMutation, AdminSignInMutationVariables>(AdminSignInDocument, options);
      }
export type AdminSignInMutationHookResult = ReturnType<typeof useAdminSignInMutation>;
export type AdminSignInMutationResult = Apollo.MutationResult<AdminSignInMutation>;
export type AdminSignInMutationOptions = Apollo.BaseMutationOptions<AdminSignInMutation, AdminSignInMutationVariables>;
export const UpdateArticleDocument = gql`
    mutation UpdateArticle($articleUpdateData: ArticleInput!, $id: ID!) {
  update_article(input: {attributes: $articleUpdateData, id: $id}) {
    clientMutationId
    graphql_name
    returning {
      category
      city_ids
      content
      created_at
      created_by
      graphql_name
      id
      image1
      image2
      pdf_file
      prefecture_id
      publish_time
      sender
      status
      title
      updated_at
      user_ids
    }
  }
}
    `;
export type UpdateArticleMutationFn = Apollo.MutationFunction<UpdateArticleMutation, UpdateArticleMutationVariables>;

/**
 * __useUpdateArticleMutation__
 *
 * To run a mutation, you first call `useUpdateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArticleMutation, { data, loading, error }] = useUpdateArticleMutation({
 *   variables: {
 *      articleUpdateData: // value for 'articleUpdateData'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateArticleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArticleMutation, UpdateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument, options);
      }
export type UpdateArticleMutationHookResult = ReturnType<typeof useUpdateArticleMutation>;
export type UpdateArticleMutationResult = Apollo.MutationResult<UpdateArticleMutation>;
export type UpdateArticleMutationOptions = Apollo.BaseMutationOptions<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const UpdateUserMiraiDocument = gql`
    mutation UpdateUserMirai($attributes: UserMiraiInput!, $id: ID!) {
  update_user_mirai(input: {attributes: $attributes, id: $id}) {
    returning {
      id
      progress
    }
  }
}
    `;
export type UpdateUserMiraiMutationFn = Apollo.MutationFunction<UpdateUserMiraiMutation, UpdateUserMiraiMutationVariables>;

/**
 * __useUpdateUserMiraiMutation__
 *
 * To run a mutation, you first call `useUpdateUserMiraiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMiraiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMiraiMutation, { data, loading, error }] = useUpdateUserMiraiMutation({
 *   variables: {
 *      attributes: // value for 'attributes'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUserMiraiMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMiraiMutation, UpdateUserMiraiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMiraiMutation, UpdateUserMiraiMutationVariables>(UpdateUserMiraiDocument, options);
      }
export type UpdateUserMiraiMutationHookResult = ReturnType<typeof useUpdateUserMiraiMutation>;
export type UpdateUserMiraiMutationResult = Apollo.MutationResult<UpdateUserMiraiMutation>;
export type UpdateUserMiraiMutationOptions = Apollo.BaseMutationOptions<UpdateUserMiraiMutation, UpdateUserMiraiMutationVariables>;
export const ActiveAreaDocument = gql`
    query ActiveArea {
  active_areas(limit: 9999) {
    id
    name
  }
}
    `;

/**
 * __useActiveAreaQuery__
 *
 * To run a query within a React component, call `useActiveAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveAreaQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveAreaQuery(baseOptions?: Apollo.QueryHookOptions<ActiveAreaQuery, ActiveAreaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveAreaQuery, ActiveAreaQueryVariables>(ActiveAreaDocument, options);
      }
export function useActiveAreaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveAreaQuery, ActiveAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveAreaQuery, ActiveAreaQueryVariables>(ActiveAreaDocument, options);
        }
export type ActiveAreaQueryHookResult = ReturnType<typeof useActiveAreaQuery>;
export type ActiveAreaLazyQueryHookResult = ReturnType<typeof useActiveAreaLazyQuery>;
export type ActiveAreaQueryResult = Apollo.QueryResult<ActiveAreaQuery, ActiveAreaQueryVariables>;
export const CitiesDocument = gql`
    query Cities($where: Filter) {
  cities(where: $where, limit: 9999) {
    id
    name
  }
}
    `;

/**
 * __useCitiesQuery__
 *
 * To run a query within a React component, call `useCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCitiesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCitiesQuery(baseOptions?: Apollo.QueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options);
      }
export function useCitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options);
        }
export type CitiesQueryHookResult = ReturnType<typeof useCitiesQuery>;
export type CitiesLazyQueryHookResult = ReturnType<typeof useCitiesLazyQuery>;
export type CitiesQueryResult = Apollo.QueryResult<CitiesQuery, CitiesQueryVariables>;
export const GenresDocument = gql`
    query Genres {
  genres(limit: 9999) {
    id
    name
  }
}
    `;

/**
 * __useGenresQuery__
 *
 * To run a query within a React component, call `useGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenresQuery(baseOptions?: Apollo.QueryHookOptions<GenresQuery, GenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
      }
export function useGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenresQuery, GenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
        }
export type GenresQueryHookResult = ReturnType<typeof useGenresQuery>;
export type GenresLazyQueryHookResult = ReturnType<typeof useGenresLazyQuery>;
export type GenresQueryResult = Apollo.QueryResult<GenresQuery, GenresQueryVariables>;
export const LanguageDocument = gql`
    query Language {
  languages(limit: 9999) {
    id
    name
  }
}
    `;

/**
 * __useLanguageQuery__
 *
 * To run a query within a React component, call `useLanguageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguageQuery({
 *   variables: {
 *   },
 * });
 */
export function useLanguageQuery(baseOptions?: Apollo.QueryHookOptions<LanguageQuery, LanguageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LanguageQuery, LanguageQueryVariables>(LanguageDocument, options);
      }
export function useLanguageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LanguageQuery, LanguageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LanguageQuery, LanguageQueryVariables>(LanguageDocument, options);
        }
export type LanguageQueryHookResult = ReturnType<typeof useLanguageQuery>;
export type LanguageLazyQueryHookResult = ReturnType<typeof useLanguageLazyQuery>;
export type LanguageQueryResult = Apollo.QueryResult<LanguageQuery, LanguageQueryVariables>;
export const MyProfileDocument = gql`
    query myProfile {
  my_profile {
    id
    avatar
    name
    occupation
    role
    email
    nickname
    phone_number
    birthday
    name_katakana
    gender
    active_area_id
    address
    organization_id
    skill_ids
    language_ids
  }
}
    `;

/**
 * __useMyProfileQuery__
 *
 * To run a query within a React component, call `useMyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyProfileQuery(baseOptions?: Apollo.QueryHookOptions<MyProfileQuery, MyProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyProfileQuery, MyProfileQueryVariables>(MyProfileDocument, options);
      }
export function useMyProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyProfileQuery, MyProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyProfileQuery, MyProfileQueryVariables>(MyProfileDocument, options);
        }
export type MyProfileQueryHookResult = ReturnType<typeof useMyProfileQuery>;
export type MyProfileLazyQueryHookResult = ReturnType<typeof useMyProfileLazyQuery>;
export type MyProfileQueryResult = Apollo.QueryResult<MyProfileQuery, MyProfileQueryVariables>;
export const OrganizationDocument = gql`
    query Organization {
  organizations(limit: 9999) {
    id
    name
  }
}
    `;

/**
 * __useOrganizationQuery__
 *
 * To run a query within a React component, call `useOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrganizationQuery(baseOptions?: Apollo.QueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
      }
export function useOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
        }
export type OrganizationQueryHookResult = ReturnType<typeof useOrganizationQuery>;
export type OrganizationLazyQueryHookResult = ReturnType<typeof useOrganizationLazyQuery>;
export type OrganizationQueryResult = Apollo.QueryResult<OrganizationQuery, OrganizationQueryVariables>;
export const PrefecturesDocument = gql`
    query Prefectures {
  prefectures(limit: 9999) {
    id
    name
  }
}
    `;

/**
 * __usePrefecturesQuery__
 *
 * To run a query within a React component, call `usePrefecturesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrefecturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrefecturesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePrefecturesQuery(baseOptions?: Apollo.QueryHookOptions<PrefecturesQuery, PrefecturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PrefecturesQuery, PrefecturesQueryVariables>(PrefecturesDocument, options);
      }
export function usePrefecturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PrefecturesQuery, PrefecturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PrefecturesQuery, PrefecturesQueryVariables>(PrefecturesDocument, options);
        }
export type PrefecturesQueryHookResult = ReturnType<typeof usePrefecturesQuery>;
export type PrefecturesLazyQueryHookResult = ReturnType<typeof usePrefecturesLazyQuery>;
export type PrefecturesQueryResult = Apollo.QueryResult<PrefecturesQuery, PrefecturesQueryVariables>;
export const SearchPostCodeDocument = gql`
    query searchPostCode($where: Filter!) {
  post_code(where: $where, limit: 9999) {
    city_id
    prefecture_id
    created_at
    graphql_name
    id
    name
    name_kana
    post_code
    status
    updated_at
  }
}
    `;

/**
 * __useSearchPostCodeQuery__
 *
 * To run a query within a React component, call `useSearchPostCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPostCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPostCodeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSearchPostCodeQuery(baseOptions: Apollo.QueryHookOptions<SearchPostCodeQuery, SearchPostCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPostCodeQuery, SearchPostCodeQueryVariables>(SearchPostCodeDocument, options);
      }
export function useSearchPostCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPostCodeQuery, SearchPostCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPostCodeQuery, SearchPostCodeQueryVariables>(SearchPostCodeDocument, options);
        }
export type SearchPostCodeQueryHookResult = ReturnType<typeof useSearchPostCodeQuery>;
export type SearchPostCodeLazyQueryHookResult = ReturnType<typeof useSearchPostCodeLazyQuery>;
export type SearchPostCodeQueryResult = Apollo.QueryResult<SearchPostCodeQuery, SearchPostCodeQueryVariables>;
export const SkillDocument = gql`
    query Skill {
  skills(limit: 9999) {
    id
    name
  }
}
    `;

/**
 * __useSkillQuery__
 *
 * To run a query within a React component, call `useSkillQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillQuery({
 *   variables: {
 *   },
 * });
 */
export function useSkillQuery(baseOptions?: Apollo.QueryHookOptions<SkillQuery, SkillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkillQuery, SkillQueryVariables>(SkillDocument, options);
      }
export function useSkillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkillQuery, SkillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkillQuery, SkillQueryVariables>(SkillDocument, options);
        }
export type SkillQueryHookResult = ReturnType<typeof useSkillQuery>;
export type SkillLazyQueryHookResult = ReturnType<typeof useSkillLazyQuery>;
export type SkillQueryResult = Apollo.QueryResult<SkillQuery, SkillQueryVariables>;
export const StampRewardsDocument = gql`
    query StampRewards($where: Filter) {
  stamp_rewards(where: $where, limit: 9999) {
    id
  }
}
    `;

/**
 * __useStampRewardsQuery__
 *
 * To run a query within a React component, call `useStampRewardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStampRewardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStampRewardsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useStampRewardsQuery(baseOptions?: Apollo.QueryHookOptions<StampRewardsQuery, StampRewardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StampRewardsQuery, StampRewardsQueryVariables>(StampRewardsDocument, options);
      }
export function useStampRewardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StampRewardsQuery, StampRewardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StampRewardsQuery, StampRewardsQueryVariables>(StampRewardsDocument, options);
        }
export type StampRewardsQueryHookResult = ReturnType<typeof useStampRewardsQuery>;
export type StampRewardsLazyQueryHookResult = ReturnType<typeof useStampRewardsLazyQuery>;
export type StampRewardsQueryResult = Apollo.QueryResult<StampRewardsQuery, StampRewardsQueryVariables>;
export const StampSpotsDocument = gql`
    query StampSpots($where: Filter) {
  stamp_spots(where: $where, limit: 9999) {
    id
  }
}
    `;

/**
 * __useStampSpotsQuery__
 *
 * To run a query within a React component, call `useStampSpotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStampSpotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStampSpotsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useStampSpotsQuery(baseOptions?: Apollo.QueryHookOptions<StampSpotsQuery, StampSpotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StampSpotsQuery, StampSpotsQueryVariables>(StampSpotsDocument, options);
      }
export function useStampSpotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StampSpotsQuery, StampSpotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StampSpotsQuery, StampSpotsQueryVariables>(StampSpotsDocument, options);
        }
export type StampSpotsQueryHookResult = ReturnType<typeof useStampSpotsQuery>;
export type StampSpotsLazyQueryHookResult = ReturnType<typeof useStampSpotsLazyQuery>;
export type StampSpotsQueryResult = Apollo.QueryResult<StampSpotsQuery, StampSpotsQueryVariables>;
export const UserDocument = gql`
    query user($id: ID!) {
  user(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserMiraisDocument = gql`
    query userMirais {
  user_mirais(limit: 9999) {
    address
    approved_date
    city_id
    created_at
    graphql_name
    id
    language_ids
    mirai_id
    personal_skill_ids
    phone_number
    post_code
    prefecture_id
    progress
    request_date
    status
    updated_at
    user {
      active_area_id
      address
      address_remark
      admin_notification
      avatar
      birthday
      city_id
      co2_diet
      created_at
      current_sign_in_at
      current_sign_in_ip
      email
      encrypted_password
      exp
      gender
      graphql_name
      id
      jti
      language_ids
      last_sign_in_at
      last_sign_in_ip
      level
      mirai_notification
      name
      name_kana
      name_katakana
      nickname
      notifications
      occupation
      organization_id
      other_notification
      phone_number
      post_code
      prefecture_id
      provider
      remember_created_at
      reset_password_sent_at
      reset_password_token
      role
      sign_in_count
      skill_ids
      sos_notification
      status
      tree_level
      uid
      updated_at
    }
    user_id
  }
}
    `;

/**
 * __useUserMiraisQuery__
 *
 * To run a query within a React component, call `useUserMiraisQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMiraisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMiraisQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserMiraisQuery(baseOptions?: Apollo.QueryHookOptions<UserMiraisQuery, UserMiraisQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserMiraisQuery, UserMiraisQueryVariables>(UserMiraisDocument, options);
      }
export function useUserMiraisLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserMiraisQuery, UserMiraisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserMiraisQuery, UserMiraisQueryVariables>(UserMiraisDocument, options);
        }
export type UserMiraisQueryHookResult = ReturnType<typeof useUserMiraisQuery>;
export type UserMiraisLazyQueryHookResult = ReturnType<typeof useUserMiraisLazyQuery>;
export type UserMiraisQueryResult = Apollo.QueryResult<UserMiraisQuery, UserMiraisQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users(limit: 9999) {
    id
    name
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;