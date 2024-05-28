import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import '../../../app/styles/index.scss';

interface PortalProps extends PropsWithChildren {
    element: HTMLElement;
}

export const Portal: FC<PortalProps> = ({ children, element }) => {
    return createPortal(children, element);
};
