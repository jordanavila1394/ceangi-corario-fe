import { createReducer, on } from '@ngrx/store';
import { toggleSidebar, closeSidebar } from './sidebar.actions';

export interface SidebarState {
    isOpen: boolean;
}

export const initialState: SidebarState = {
    isOpen: false,
};

export const sidebarReducer = createReducer(
    initialState,
    on(toggleSidebar, state => ({ ...state, isOpen: !state.isOpen })),
    on(closeSidebar, state => ({ ...state, isOpen: false }))
);
