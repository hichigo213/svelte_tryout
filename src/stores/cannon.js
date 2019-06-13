import {writable} from 'svelte/store';

export const direction = writable(null);
export const angle = writable(0);
export const bulletList = writable([]);
export const isFiring = writable(false);
export const lastFireAt = writable(0);