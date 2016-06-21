'use strict';

module.exports = {

    types: [{
        value: 'front',
        name: 'front:     Change about front (design of website)'
    }, {
        value: 'back',
        name: 'back:      Script js of html changed'
    }, {
        value: 'environment',
        name: 'environment:     Changment about tools enviroment or file system repository'
    }, {
        value: 'other',
        name: 'other:    Others could be: fix bug, merge, etc..'
    }],

    scopes: [{
        name: 'front'
    }, {
        name: 'back'
    }, {
        name: 'environment'
    }, {
        name: 'other'
    }],

    // it needs to match the value for field type. Eg.: 'fix'

    scopeOverrides: {
        front: [{
            name: 'merge'
        }, {
            name: 'style'
        }, {
            name: 'animation'
        }, {
            name: 'design'
        }],
        back: [{
            name: 'js'
        }, {
            name: 'html'
        }],
        environment: [{
            name: 'tools'
        }, {
            name: 'change'
        }],
        other: [{
            name: 'fix'
        }, {
            name: 'merge'
        }, {
            name: 'revert'
        }]
    },


    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix']

};
