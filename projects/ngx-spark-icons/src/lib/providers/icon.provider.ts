import { InjectionToken, Provider, inject } from '@angular/core';

export function provideIcons(icons: Record<string, string>): Provider[] {
  return [
    {
      provide: IconsToken,
      useFactory: (
        parentIcons: Record<string, string>[] = inject(IconsToken, {
          optional: true,
          skipSelf: true,
        }) || []
      ) => {
        const mergedIcons = parentIcons.reduce(
          (acc, icons) => ({ ...acc, ...icons }),
          {}
        );
        return { ...mergedIcons, ...icons };
      },
      multi: true,
    },
  ];
}

export const IconsToken = new InjectionToken<Record<string, string>[]>(
  'Icons Token'
);

export function injectIcons(): Record<string, string>[] {
  return inject(IconsToken, { optional: true }) ?? [];
}
