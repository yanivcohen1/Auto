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
