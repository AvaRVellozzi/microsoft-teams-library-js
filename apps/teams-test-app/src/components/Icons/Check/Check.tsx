export type CheckProps = {
  fill: string;
};

export const Check = ({ fill }: CheckProps): JSX.Element => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m8.5 16.586-3.793-3.793a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414 0l11-11a1 1 0 0 0-1.414-1.414L8.5 16.586Z"
      fill={fill}
    />
  </svg>
);
