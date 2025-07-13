
    create table classes (
        ClassID integer not null auto_increment unique,
        ClassName varchar(255),
        TestId integer not null,
        primary key (ClassID)
    ) ENGINE=InnoDB;

    create table parameters (
        ParameterID integer not null auto_increment unique,
        ParameterName varchar(255),
        ParameterValue varchar(255),
        TestId integer not null,
        primary key (ParameterID)
    ) ENGINE=InnoDB;

    create table suites (
        SuitesId integer not null auto_increment unique,
        jenkinsURL varchar(255),
        SuiteName varchar(255),
        xmlFileLocation varchar(255),
        primary key (SuitesId)
    ) ENGINE=InnoDB;

    create table tests (
        TestsId integer not null auto_increment unique,
        TestName varchar(255) not null,
        SuitesId integer not null,
        primary key (TestsId)
    ) ENGINE=InnoDB;

    alter table classes 
        add index FK32E1382645FED64 (TestId), 
        add constraint FK32E1382645FED64 
        foreign key (TestId) 
        references tests (TestsId);

    alter table parameters 
        add index FK1B57C1EA45FED64 (TestId), 
        add constraint FK1B57C1EA45FED64 
        foreign key (TestId) 
        references tests (TestsId);

    alter table tests 
        add index FK6924E216CAE03FB (SuitesId), 
        add constraint FK6924E216CAE03FB 
        foreign key (SuitesId) 
        references suites (SuitesId);
