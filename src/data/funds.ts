import type { Fund, Section } from '@/types';

export const funds: Fund[] = [
  {
    id: 'gaf',
    name: 'GAF',
    shortName: 'GAF',
    warningLevel: 'minor',
    status: 'completed',
  },
  {
    id: 'gasef',
    name: 'GASEF',
    shortName: 'GASEF',
    warningLevel: 'major',
    status: 'pending',
  },
  {
    id: 'cusef',
    name: 'CUSEF',
    shortName: 'CUSEF',
    warningLevel: 'none',
    status: 'completed',
  },
];

export const fundSections: Record<string, Section[]> = {
  gaf: [
    {
      id: 1,
      title: 'SECTION 1',
      questions: [
        {
          id: 'gaf-1-1',
          section: 1,
          number: '1.1',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'minor',
          isReviewed: false,
        },
        {
          id: 'gaf-1-2',
          section: 1,
          number: '1.2',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'minor',
          isReviewed: false,
        },
        {
          id: 'gaf-1-3',
          section: 1,
          number: '1.3',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'major',
          isReviewed: false,
        },
      ],
    },
    {
      id: 2,
      title: 'SECTION 2',
      questions: [
        {
          id: 'gaf-2-1',
          section: 2,
          number: '2.1',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'none',
          isReviewed: true,
        },
        {
          id: 'gaf-2-2',
          section: 2,
          number: '2.2',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'none',
          isReviewed: true,
        },
        {
          id: 'gaf-2-3',
          section: 2,
          number: '2.3',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'minor',
          isReviewed: true,
        },
        {
          id: 'gaf-2-4',
          section: 2,
          number: '2.4',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'minor',
          isReviewed: true,
        },
      ],
    },
    {
      id: 3,
      title: 'SECTION 3',
      questions: [
        {
          id: 'gaf-3-1',
          section: 3,
          number: '3.1',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'minor',
          isReviewed: true,
        },
        {
          id: 'gaf-3-2',
          section: 3,
          number: '3.2',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'minor',
          isReviewed: true,
        },
        {
          id: 'gaf-3-3',
          section: 3,
          number: '3.3',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'minor',
          isReviewed: true,
        },
        {
          id: 'gaf-3-4',
          section: 3,
          number: '3.4',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'minor',
          isReviewed: true,
        },
        {
          id: 'gaf-3-5',
          section: 3,
          number: '3.5',
          question:
            'Did you provide detailed performance reports to 24 Capital Management during the...',
          answer:
            'Answer goes hereAnswer goes hereAnswer goes hereAnswer goes here',
          warningLevel: 'minor',
          isReviewed: true,
        },
      ],
    },
  ],
  gasef: [
    {
      id: 1,
      title: 'SECTION 1',
      questions: [
        {
          id: 'gasef-1-1',
          section: 1,
          number: '1.1',
          question: 'Has the fund maintained compliance with all regulatory requirements during the reporting period?',
          answer: 'Yes, full compliance was maintained throughout the period with no regulatory issues identified.',
          warningLevel: 'none',
          isReviewed: true,
        },
        {
          id: 'gasef-1-2',
          section: 1,
          number: '1.2',
          question: 'Were all investor communications delivered within the agreed timeframes?',
          answer: 'Most communications were delivered on time, with two instances of minor delays.',
          warningLevel: 'minor',
          isReviewed: false,
        },
        {
          id: 'gasef-1-3',
          section: 1,
          number: '1.3',
          question: 'Did the fund experience any material operational disruptions?',
          answer: 'A system outage occurred on March 15th lasting approximately 4 hours affecting trade execution.',
          warningLevel: 'major',
          isReviewed: false,
        },
      ],
    },
    {
      id: 2,
      title: 'SECTION 2',
      questions: [
        {
          id: 'gasef-2-1',
          section: 2,
          number: '2.1',
          question: 'Were all NAV calculations performed accurately and on schedule?',
          answer: 'All NAV calculations were completed accurately with independent verification.',
          warningLevel: 'none',
          isReviewed: true,
        },
        {
          id: 'gasef-2-2',
          section: 2,
          number: '2.2',
          question: 'Has the fund adhered to its investment mandate and guidelines?',
          answer: 'The fund operated within mandate parameters with one temporary breach that was corrected within 24 hours.',
          warningLevel: 'major',
          isReviewed: false,
        },
      ],
    },
  ],
  cusef: [
    {
      id: 1,
      title: 'SECTION 1',
      questions: [
        {
          id: 'cusef-1-1',
          section: 1,
          number: '1.1',
          question: 'Has the fund met all performance benchmarks for the current period?',
          answer: 'The fund exceeded its benchmark by 1.2% for the reporting period.',
          warningLevel: 'none',
          isReviewed: true,
        },
        {
          id: 'cusef-1-2',
          section: 1,
          number: '1.2',
          question: 'Were all risk management controls operating effectively?',
          answer: 'All risk controls operated as expected with no breaches recorded.',
          warningLevel: 'none',
          isReviewed: true,
        },
        {
          id: 'cusef-1-3',
          section: 1,
          number: '1.3',
          question: 'Has counterparty exposure remained within approved limits?',
          answer: 'All counterparty exposures remained well within approved concentration limits.',
          warningLevel: 'none',
          isReviewed: true,
        },
      ],
    },
    {
      id: 2,
      title: 'SECTION 2',
      questions: [
        {
          id: 'cusef-2-1',
          section: 2,
          number: '2.1',
          question: 'Were all redemption requests processed within the stated timeframe?',
          answer: 'All 47 redemption requests were processed within the 5 business day window.',
          warningLevel: 'none',
          isReviewed: true,
        },
        {
          id: 'cusef-2-2',
          section: 2,
          number: '2.2',
          question: 'Has the fund maintained adequate liquidity levels?',
          answer: 'Liquidity ratios remained above 15% throughout the period, well above the 10% minimum.',
          warningLevel: 'none',
          isReviewed: true,
        },
        {
          id: 'cusef-2-3',
          section: 2,
          number: '2.3',
          question: 'Were all third-party service provider agreements renewed on schedule?',
          answer: 'All agreements were reviewed and renewed prior to expiration dates.',
          warningLevel: 'none',
          isReviewed: true,
        },
      ],
    },
  ],
};
