
export interface SearchRrepositoriesAction {
  type: 'search_repositories'
}

export interface SearchRrepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}

export interface SearchRrepositoriesErrorAction {
  type: 'search_repositories_error'
  payload: string;
}

export type Action = 
  | SearchRrepositoriesAction
  | SearchRrepositoriesSuccessAction
  | SearchRrepositoriesErrorAction;
