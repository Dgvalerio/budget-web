import React, { FC } from 'react';

import styles from '@/components/footer/footer.styles.module.scss';
import { Text } from '@/components/text/text';

export interface FooterProps {}

export const Footer: FC<FooterProps> = () => (
  <footer className={styles.footer}>
    <Text>Davi Gonçalves Valério</Text>
    <Text>2023</Text>
  </footer>
);
