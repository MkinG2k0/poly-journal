interface SkeletProps {
  status: boolean | string;
  border?: 0 | 1 | 2 | 3 | 4;
  width?: number | string;
  height?: number | string;
  classSkelet?: string;
  duration?: Duration;
}

interface SkeletTextProps extends SkeletProps {
  sizeFont?: Size;
}

interface SkeletTextArrProps extends SkeletTextProps {
  row: number;
}
