module.exports = {
	ci: {
		collect: {
			url: ['http://localhost:3000'],
			startServerCommand: 'npm start',
			startServerReadyPattern: 'ready on',
			startServerReadyTimeout: 30000,
			numberOfRuns: 3,
		},
		assert: {
			assertions: {
				'categories:performance': ['warn', { minScore: 0.9 }],
				'categories:accessibility': ['error', { minScore: 0.95 }],
				'categories:best-practices': ['warn', { minScore: 0.9 }],
				'categories:seo': ['warn', { minScore: 0.9 }],
				'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
				'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
				'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
				'total-blocking-time': ['warn', { maxNumericValue: 300 }],
				'speed-index': ['warn', { maxNumericValue: 2000 }],
			},
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
