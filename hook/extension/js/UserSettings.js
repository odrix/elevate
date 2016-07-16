var userSettings = {
    extensionHasJustUpdated: false,
    localStorageMustBeCleared: false,
    userGender: 'men',
    userMaxHr: 190,
    userRestHr: 65,
    userFTP: null,
    userHrrZones: [{
        fromHrr: 10,
        toHrr: 30,
    }, {
        fromHrr: 30,
        toHrr: 40,
    }, {
        fromHrr: 40,
        toHrr: 50,
    }, {
        fromHrr: 50,
        toHrr: 55,
    }, {
        fromHrr: 55,
        toHrr: 60,
    }, {
        fromHrr: 60,
        toHrr: 65,
    }, {
        fromHrr: 65,
        toHrr: 70,
    }, {
        fromHrr: 70,
        toHrr: 75,
    }, {
        fromHrr: 75,
        toHrr: 80,
    }, {
        fromHrr: 80,
        toHrr: 85,
    }, {
        fromHrr: 85,
        toHrr: 90,
    }, {
        fromHrr: 90,
        toHrr: 95
    }, {
        fromHrr: 95,
        toHrr: 100
    }, {
        fromHrr: 100,
        toHrr: 110
    }],
    zones: {
        speed: [{
            from: 0,
            to: 10
        }, {
            from: 10,
            to: 13
        }, {
            from: 13,
            to: 17
        }, {
            from: 17,
            to: 23
        }, {
            from: 23,
            to: 28
        }, {
            from: 28,
            to: 32
        }, {
            from: 32,
            to: 35
        }, {
            from: 35,
            to: 38
        }, {
            from: 38,
            to: 40
        }, {
            from: 40,
            to: 42
        }, {
            from: 42,
            to: 45
        }, {
            from: 45,
            to: 55
        }],
        pace: [{
            from: 120,
            to: 150
        }, {
            from: 150,
            to: 180
        }, {
            from: 180,
            to: 220
        }, {
            from: 220,
            to: 250
        }, {
            from: 250,
            to: 290
        }, {
            from: 290,
            to: 330
        }, {
            from: 330,
            to: 370
        }, {
            from: 370,
            to: 410
        }, {
            from: 410,
            to: 450
        }, {
            from: 450,
            to: 525
        }, {
            from: 525,
            to: 570
        }, {
            from: 570,
            to: 610
        }, {
            from: 610,
            to: 650
        }, {
            from: 650,
            to: 700
        }, {
            from: 700,
            to: 750
        }],
        power: [{
            from: 0,
            to: 25
        }, {
            from: 25,
            to: 50
        }, {
            from: 50,
            to: 75
        }, {
            from: 75,
            to: 100
        }, {
            from: 100,
            to: 125
        }, {
            from: 125,
            to: 150
        }, {
            from: 150,
            to: 175
        }, {
            from: 175,
            to: 200
        }, {
            from: 200,
            to: 225
        }, {
            from: 225,
            to: 250
        }, {
            from: 250,
            to: 275
        }, {
            from: 275,
            to: 300
        }, {
            from: 300,
            to: 325
        }, {
            from: 325,
            to: 350
        }, {
            from: 350,
            to: 375
        }, {
            from: 375,
            to: 400
        }, {
            from: 400,
            to: 425
        }, {
            from: 425,
            to: 450
        }, {
            from: 450,
            to: 475
        }, {
            from: 475,
            to: 500
        }, {
            from: 500,
            to: 525
        }, {
            from: 525,
            to: 550
        }, {
            from: 550,
            to: 575
        }, {
            from: 575,
            to: 600
        }, {
            from: 600,
            to: 625
        }, {
            from: 625,
            to: 650
        }, {
            from: 650,
            to: 675
        }, {
            from: 675,
            to: 700
        }, {
            from: 700,
            to: 725
        }, {
            from: 725,
            to: 750
        }, {
            from: 750,
            to: 775
        }, {
            from: 775,
            to: 800
        }, {
            from: 800,
            to: 825
        }, {
            from: 825,
            to: 850
        }, {
            from: 850,
            to: 875
        }, {
            from: 875,
            to: 900
        }, {
            from: 900,
            to: 925
        }, {
            from: 925,
            to: 950
        }, {
            from: 950,
            to: 975
        }, {
            from: 975,
            to: 1000
        }, {
            from: 1000,
            to: 1025
        }, {
            from: 1025,
            to: 1050
        }, {
            from: 1050,
            to: 1075
        }, {
            from: 1075,
            to: 1100
        }, {
            from: 1100,
            to: 1125
        }, {
            from: 1125,
            to: 1150
        }, {
            from: 1150,
            to: 1175
        }, {
            from: 1175,
            to: 1200
        }, {
            from: 1200,
            to: 1225
        }, {
            from: 1225,
            to: 1250
        }],
        cyclingCadence: [{
            from: 0,
            to: 5
        }, {
            from: 5,
            to: 60
        }, {
            from: 60,
            to: 70
        }, {
            from: 70,
            to: 75
        }, {
            from: 75,
            to: 80
        }, {
            from: 80,
            to: 85
        }, {
            from: 85,
            to: 90
        }, {
            from: 90,
            to: 95
        }, {
            from: 95,
            to: 100
        }, {
            from: 100,
            to: 105
        }, {
            from: 105,
            to: 110
        }],
        runningCadence: [{
            from: 85,
            to: 85.5
        }, {
            from: 85.5,
            to: 86
        }, {
            from: 86,
            to: 86.5
        }, {
            from: 86.5,
            to: 87
        }, {
            from: 87,
            to: 87.5
        }, {
            from: 87.5,
            to: 88
        }, {
            from: 88,
            to: 88.5
        }, {
            from: 88.5,
            to: 89
        }, {
            from: 89,
            to: 89.5
        }, {
            from: 89.5,
            to: 90
        }, {
            from: 90,
            to: 90.5
        }, {
            from: 90.5,
            to: 91
        }, {
            from: 91,
            to: 91.5
        }, {
            from: 91.5,
            to: 92
        }, {
            from: 92,
            to: 92.5
        }, {
            from: 92.5,
            to: 93
        }, {
            from: 93,
            to: 93.5
        }, {
            from: 93.5,
            to: 94
        }],
        grade: [{
            from: -15,
            to: -10
        }, {
            from: -10,
            to: -7
        }, {
            from: -7,
            to: -3
        }, {
            from: -3,
            to: -1
        }, {
            from: -1,
            to: 1
        }, {
            from: 1,
            to: 4
        }, {
            from: 4,
            to: 7
        }, {
            from: 7,
            to: 8
        }, {
            from: 8,
            to: 9
        }, {
            from: 9,
            to: 10
        }, {
            from: 10,
            to: 11
        }, {
            from: 11,
            to: 15
        }],
        elevation: [{
            from: 0,
            to: 125
        }, {
            from: 125,
            to: 250
        }, {
            from: 250,
            to: 500
        }, {
            from: 500,
            to: 750
        }, {
            from: 750,
            to: 1000
        }, {
            from: 1000,
            to: 1500
        }, {
            from: 1500,
            to: 2000
        }, {
            from: 2000,
            to: 2500
        }, {
            from: 2500,
            to: 3000
        }, {
            from: 3000,
            to: 3500
        }],
        ascent: [{
            from: 0,
            to: 300
        }, {
            from: 300,
            to: 450
        }, {
            from: 450,
            to: 600
        }, {
            from: 600,
            to: 750
        }, {
            from: 750,
            to: 900
        }, {
            from: 900,
            to: 1000
        }, {
            from: 1000,
            to: 1100
        }, {
            from: 1100,
            to: 1200
        }, {
            from: 1200,
            to: 1300
        }, {
            from: 1300,
            to: 1400
        }, {
            from: 1400,
            to: 1500
        }, {
            from: 1500,
            to: 1700
        }, {
            from: 1700,
            to: 2000
        }, {
            from: 2000,
            to: 3000
        }]
    },
    targetsYearRide: 5000,
    targetsYearRun: 750,
    remoteLinks: true,
    feedAutoScroll: true,
    defaultLeaderboardFilter: 'overall',
    activateRunningGradeAdjustedPace: true,
    activateRunningHeartRate: true,
    activateRunningCadence: true,
    activateRunningTemperature: true,
    activityStravaMapType: 'terrain',
    hidePremiumFeatures: true,
    displaySegmentRankPercentage: true,
    displayNearbySegments: true,
    displayMotivationScore: true,
    displayActivityRatio: true,
    displayAdvancedPowerData: true,
    displayAdvancedSpeedData: true,
    displayAdvancedHrData: true,
    displayCadenceData: true,
    displayAdvancedGradeData: true,
    displayAdvancedElevationData: true,
    displayBikeOdoInActivity: true,
    enableBothLegsCadence: false,
    feedHideChallenges: false,
    feedHideCreatedRoutes: false,
    feedHideRideActivitiesUnderDistance: 0,
    feedHideRunActivitiesUnderDistance: 0,
    displaySegmentTimeComparisonToKOM: true,
    displaySegmentTimeComparisonToPR: true,
    displaySegmentTimeComparisonToCurrentYearPR: true,
    displaySegmentTimeComparisonPosition: true,
    reviveGoogleMaps: true,
    reviveGoogleMapsLayerType: 'terrain',
    displayActivityBestSplits: true,
    bestSplitsConfiguration: null,
    temperatureUnit: 'F',
    windUnit: 'mph',
};
