
export function handleError(err: any): string{
  return `
    [${err.error.status ? err.error.status : 'Error'} ${err.error.error ? err.error.error : ''}]:
    ${err.error.message ? err.error.message: 'Error while processing your request'}`;
}
