'use strict';

const data = {};

data.users = [
    {
        login: 'JIM',
        password: 'a_secret'
    },
    {
        login: 'BIM',
        password: 'a_secret'
    }
];

data.quests = [
    {
        title: 'Elmash',
        description: 'description quest1'
    },
    {
        title: 'VIZ',
        description: 'description quest2'
    },
    {
        title: 'CENTER',
        description: 'description quest3'
    }
];

data.places = [
    {
        name: 'OFFICE YANDEX',
        description: 'Some description',
        coordinates: 'while string',
        photo:  'url for load photo'
    },
    {
        name: 'METRO URALMASH',
        description: 'Some description',
        coordinates: 'while string',
        photo:  'url for load photo'
    },
    {
        name: 'VIZ BULVAR',
        description: 'Some description',
        coordinates: 'while string',
        photo:  'url for load photo'
    }
];

data.photos = [
    {
        url: "some url for photo 1"
    },
    {
        url: "some url for photo 2"
    },
    {
        url: "some url for photo 3"
    }
];

data.comments = [
    {
        text: "some comment 1"
    },
    {
        text: "some comment 2"
    },
    {
        text: "some comment 3"
    }
];

data.likes = [{}, {}, {}, {}, {}];

module.exports = data;
