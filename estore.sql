USE [Db_Tank]
GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_GoodsID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_GoodsID]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_PriceValue]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_PriceValue]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_StrengthenLevel]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_StrengthenLevel]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_AttackCompose]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_AttackCompose]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_DefendCompose]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_DefendCompose]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_LcukCompose]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_LcukCompose]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_AgilityCompose]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_AgilityCompose]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_IsBinds]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_IsBinds]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_ValidDate]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_ValidDate]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_BuyMany]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_BuyMany]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_Type]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_Type]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_AddDate]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_AddDate]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_AddUser]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_AddUser]
END

GO

IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_eStore_PriceValue1]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[eStore] DROP CONSTRAINT [DF_eStore_PriceValue1]
END

GO

USE [Db_Tank]
GO

/****** Object:  Table [dbo].[eStore]    Script Date: 08/02/2014 19:00:35 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[eStore]') AND type in (N'U'))
DROP TABLE [dbo].[eStore]
GO

USE [Db_Tank]
GO

/****** Object:  Table [dbo].[eStore]    Script Date: 08/02/2014 19:00:35 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[eStore](
	[StoreID] [int] IDENTITY(1,1) NOT NULL,
	[TemplateID] [int] NOT NULL,
	[PriceValue] [int] NOT NULL,
	[StrengthenLevel] [int] NOT NULL,
	[AttackCompose] [int] NOT NULL,
	[DefendCompose] [int] NOT NULL,
	[LuckCompose] [int] NOT NULL,
	[AgilityCompose] [int] NOT NULL,
	[IsBinds] [bit] NOT NULL,
	[ValidDate] [int] NOT NULL,
	[BuyMany] [int] NOT NULL,
	[Type] [int] NOT NULL,
	[AddDate] [datetime] NOT NULL,
	[AddUser] [nvarchar](250) NOT NULL,
	[PriceValue1] [int] NOT NULL,
 CONSTRAINT [PK_eStore] PRIMARY KEY CLUSTERED 
(
	[StoreID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]

GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'用户物品表ID' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore', @level2type=N'COLUMN',@level2name=N'StoreID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'物品ID' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore', @level2type=N'COLUMN',@level2name=N'TemplateID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'强化等级' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore', @level2type=N'COLUMN',@level2name=N'StrengthenLevel'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'攻击加成' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore', @level2type=N'COLUMN',@level2name=N'AttackCompose'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'防御加成' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore', @level2type=N'COLUMN',@level2name=N'DefendCompose'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'幸运加成' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore', @level2type=N'COLUMN',@level2name=N'LuckCompose'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'敏捷加成' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore', @level2type=N'COLUMN',@level2name=N'AgilityCompose'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否绑定' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore', @level2type=N'COLUMN',@level2name=N'IsBinds'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'有效日期' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore', @level2type=N'COLUMN',@level2name=N'ValidDate'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'用户物品表' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'eStore'
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_GoodsID]  DEFAULT ((0)) FOR [TemplateID]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_PriceValue]  DEFAULT ((0)) FOR [PriceValue]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_StrengthenLevel]  DEFAULT ((0)) FOR [StrengthenLevel]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_AttackCompose]  DEFAULT ((0)) FOR [AttackCompose]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_DefendCompose]  DEFAULT ((0)) FOR [DefendCompose]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_LcukCompose]  DEFAULT ((0)) FOR [LuckCompose]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_AgilityCompose]  DEFAULT ((0)) FOR [AgilityCompose]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_IsBinds]  DEFAULT ((1)) FOR [IsBinds]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_ValidDate]  DEFAULT ((0)) FOR [ValidDate]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_BuyMany]  DEFAULT ((0)) FOR [BuyMany]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_Type]  DEFAULT ((0)) FOR [Type]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_AddDate]  DEFAULT (getdate()) FOR [AddDate]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_AddUser]  DEFAULT ('SqlStudio') FOR [AddUser]
GO

ALTER TABLE [dbo].[eStore] ADD  CONSTRAINT [DF_eStore_PriceValue1]  DEFAULT ((0)) FOR [PriceValue1]
GO


