
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, and Azure
-- --------------------------------------------------
-- Date Created: 11/07/2014 22:10:57
-- Generated from EDMX file: C:\Users\User\Documents\Visual Studio 2012\Projects\AngularJSAuthentication-restful\AngularJSAuthentication.API\Models\TestsModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [AngularJSAuth];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_dbo_tests_dbo_suites_SuiteId]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[test] DROP CONSTRAINT [FK_dbo_tests_dbo_suites_SuiteId];
GO
IF OBJECT_ID(N'[dbo].[FK_tests_suites]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[test] DROP CONSTRAINT [FK_tests_suites];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[suite]', 'U') IS NOT NULL
    DROP TABLE [dbo].[suite];
GO
IF OBJECT_ID(N'[dbo].[test]', 'U') IS NOT NULL
    DROP TABLE [dbo].[test];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'suite'
CREATE TABLE [dbo].[suite] (
    [SuiteId] int IDENTITY(1,1) NOT NULL,
    [SuiteName] nvarchar(max)  NULL,
    [xmlFileLocation] nvarchar(max)  NULL,
    [jenkinsURL] nvarchar(max)  NULL
);
GO

-- Creating table 'test'
CREATE TABLE [dbo].[test] (
    [TestId] int IDENTITY(1,1) NOT NULL,
    [SuiteId] int  NOT NULL,
    [TestName] nvarchar(max)  NULL,
    [classesName] nvarchar(max)  NULL,
    [parametersName] nvarchar(max)  NULL,
    [parametersValue] nvarchar(max)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [SuiteId] in table 'suite'
ALTER TABLE [dbo].[suite]
ADD CONSTRAINT [PK_suite]
    PRIMARY KEY CLUSTERED ([SuiteId] ASC);
GO

-- Creating primary key on [TestId] in table 'test'
ALTER TABLE [dbo].[test]
ADD CONSTRAINT [PK_test]
    PRIMARY KEY CLUSTERED ([TestId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [SuiteId] in table 'test'
ALTER TABLE [dbo].[test]
ADD CONSTRAINT [FK_dbo_tests_dbo_suites_SuiteId]
    FOREIGN KEY ([SuiteId])
    REFERENCES [dbo].[suite]
        ([SuiteId])
    ON DELETE CASCADE ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_dbo_tests_dbo_suites_SuiteId'
CREATE INDEX [IX_FK_dbo_tests_dbo_suites_SuiteId]
ON [dbo].[test]
    ([SuiteId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------

USE [AngularJSAuth]
GO
/****** Object:  Table [dbo].[suite]    Script Date: 07/11/2014 12:51:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

GO
SET IDENTITY_INSERT [dbo].[suite] ON 

INSERT [dbo].[suite] ([SuiteId], [SuiteName], [xmlFileLocation], [jenkinsURL]) VALUES (1, N'BAU test', N'asda', N'asdasd')
INSERT [dbo].[suite] ([SuiteId], [SuiteName], [xmlFileLocation], [jenkinsURL]) VALUES (2, N'BAU test 2', N'zsdasa', N'asdasd')
SET IDENTITY_INSERT [dbo].[suite] OFF
SET IDENTITY_INSERT [dbo].[test] ON 

INSERT [dbo].[test] ([TestId], [SuiteId], [TestName], [classesName], [parametersName], [parametersValue]) VALUES (1, 2, N'for test only', N'sdf', N'sdf', N'sdf')
INSERT [dbo].[test] ([TestId], [SuiteId], [TestName], [classesName], [parametersName], [parametersValue]) VALUES (2, 1, N'sdfsdf', N'sdf', N'sdf', N'sdf')
INSERT [dbo].[test] ([TestId], [SuiteId], [TestName], [classesName], [parametersName], [parametersValue]) VALUES (3, 1, N'sdf', N'sdf', N'sdf', N'sdf')
INSERT [dbo].[test] ([TestId], [SuiteId], [TestName], [classesName], [parametersName], [parametersValue]) VALUES (4, 1, N'sdf', N'sdf', N'sdf', N'sdfsdf')
SET IDENTITY_INSERT [dbo].[test] OFF
ALTER TABLE [dbo].[test]  WITH CHECK ADD  CONSTRAINT [FK_test_suite] FOREIGN KEY([SuiteId])
REFERENCES [dbo].[suite] ([SuiteId])
GO
ALTER TABLE [dbo].[test] CHECK CONSTRAINT [FK_test_suite]
GO
