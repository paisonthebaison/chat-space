# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null:false|

### Association
- has_many :chat_groups, through: :groups_users
- has_many :chat_groups
- has_many :chats

## chat_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_name|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :chat_groups
- has_many :chats

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, forreign_key: true|

### Association
- belongs_to :chat_group
- belongs_to :user


## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|image|text||
|text|text||

### Association
- belongs_to :user
- belongs_to :chat-group


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
