# Página Vitor — MBA IDA

Cópia independente da página original, com checkout de afiliado:
https://pay.voompcreators.com.br/bKrxpWkJrygL2pXW?a_id=11042

O HTML de entrada é `vitor.html`. Para gerar a versão publicável:

```sh
cd vitor
npm install
npm run build
```

Publique o conteúdo de `dist/` na pasta `/mba-ida/vitor/` do servidor, incluindo `.htaccess` em hospedagens Apache. A página será acessada em **https://ambientalpro.com.br/mba-ida/vitor/**, sem extensão HTML. O build gera `index.html` com o mesmo conteúdo de `vitor.html`, permitindo acesso pela pasta mesmo sem regras de reescrita. Em Apache, acessos diretos aos arquivos HTML também são redirecionados para a pasta.

Imagens, estilos, fontes e formulário foram preservados. Todos os destinos de checkout desta cópia usam o link acima. A página original permanece independente.

## Publicação pelo projeto principal

Na raiz do projeto, `npm run build` gera a página original em `dist/` e inclui esta cópia em `dist/vitor/`. Publique **todo o conteúdo de `dist/`** na pasta `/mba-ida/` do servidor, preservando as subpastas. Não publique os arquivos de código-fonte diretamente.
