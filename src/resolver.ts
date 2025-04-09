// src/resolver.ts
import type { ComponentResolver } from 'unplugin-vue-components';

const MelonseedsUIResolver = (): ComponentResolver => {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (name.startsWith('Me')) {
                return {
                    importName: name.slice(2), // 移除前缀（如 MeButton → Button）
                    path: 'melonseeds-ui',
                    sideEffects: 'melonseeds-ui/dist/melonseeds-ui.css' // 自动引入样式
                };
            }
        }
    };
};
export {
    MelonseedsUIResolver
}