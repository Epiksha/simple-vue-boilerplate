import PIndex from '../routes/PIndex/PIndex.vue';
import PStyle from '../routes/PStyle/PStyle.vue';

export default [
    {
        path: '/',
        name: 'PIndex',
        component: PIndex,
    },
    {
        path: '/style',
        name: 'PStyle',
        component: PStyle,
    },
];
