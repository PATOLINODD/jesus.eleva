# Beat ’em up na Steam: vendas, reviews e o que faz o jogador voltar

Entendi o estilo como **beat ’em up lateral**. O link da Gamalytic ajuda a escolher as colunas, mas contém apenas `columns=`: não filtra por “Beat ’em up” nem ordena por vendas. Para montar a lista lá, aplique o filtro de tag, escolha jogos lançados e ordene por cópias vendidas ou receita. A página permite filtrar por gênero, data, vendas, reviews e outros campos. 

A Steam não publica vendas por jogo. Então, abaixo, usei uma única estimativa de vendas Steam para comparar os títulos. **São modelos, não números oficiais**; receita bruta estimada também não é o que sobra para o estúdio depois da parte da Valve, reembolsos e impostos. 

## Comparáveis comerciais fortes

| Jogo | Vendas estimadas na Steam | Reviews Steam e nota | Marco de vendas público |
|---|---:|---:|---|
| **Castle Crashers** | **5,68 milhões**; US$ 39,4 mi brutos estimados | 140,9 mil reviews; 96% positivas | The Behemoth informou mais de **20 milhões de cópias em todas as plataformas** até 2019.  |
| **Streets of Rage 4** | **793,8 mil**; US$ 11,9 mi brutos estimados | 19,7 mil reviews; 92% positivas | —  |
| **TMNT: Shredder’s Revenge** | **593,9 mil**; US$ 8,9 mi brutos estimados | 14,9 mil reviews; 94% positivas | A Dotemu confirmou **1 milhão de cópias em todas as plataformas na primeira semana**.  |
| **Absolum** | **251,1 mil**; US$ 3,8 mi brutos estimados | 10,7 mil reviews; 92% positivas | A Dotemu anunciou **500 mil cópias em todas as plataformas** em janeiro de 2026.  |
| **River City Girls** | **135,8 mil**; US$ 2,4 mi brutos estimados | 3,8 mil reviews; 84% positivas | —  |

As estimativas de vendas são do Raijin, com snapshots entre 2 e 3 de outubro de 2026; os demais títulos têm snapshots de setembro. O próprio Raijin explica que combina reviews, proporção de compras verificadas, dados amostrais de contas e calibração com vendas divulgadas. Portanto, use os números para comparar a escala e a ordem de grandeza, não como contabilidade exata. 

Um cuidado ao comparar com a Gamalytic: o SteamDB lista **9,71 milhões para Castle Crashers como estimativa de proprietários da Gamalytic**, enquanto a tabela usa estimativa de unidades vendidas do Raijin. “Proprietários” e “cópias vendidas” são métricas diferentes. 

## O que encontrei nos reviews

Li reviews destacados e críticas de jogadores — uma amostra qualitativa, não uma análise automática de cada review.

- **Combate que responde bem:** jogadores elogiam golpes fluidos, combos, ritmo e a satisfação de aprender o tempo dos ataques. Em *Streets of Rage 4*, reviews destacados também valorizam chefes com padrões próprios e dificuldade que recompensa aprender. 
- **Co-op transforma o jogo em programa social:** *Castle Crashers* aparece como jogo para jogar com amigos, com humor e personagens desbloqueáveis; reviews de *Streets of Rage 4* também descrevem sessões em família e como jogo de festa. 
- **Nostalgia e identidade chamam atenção:** reviews de *TMNT* elogiam o visual pixel art, a música, os personagens e as referências à série antiga. Mas fãs do gênero criticam personagens parecidos demais e combate com pouca profundidade para quem quer dominar o jogo por muitas horas. 
- **Repetição e progressão artificial afastam:** críticas a *Castle Crashers* reclamam de grind e perda de progresso. Em *Absolum*, há elogios às rotas, segredos e variedade de inimigos, mas também críticas à repetição e a melhorias que parecem só aumentar números. 
- **Recursos sociais precisam funcionar de verdade:** reviews de *River City Girls* apontam a falta de co-op online nativo como limitação importante para jogar com amigos à distância. 

## O que a literatura ajuda a explicar

Em quatro estudos, Ryan, Rigby e Przybylski observaram que **autonomia** — sentir que escolhe como agir — e **competência** — perceber que está ficando melhor — se associavam a diversão e preferência. Em uma amostra de jogadores multiplayer, autonomia, competência e conexão social também previam diversão e intenção de jogar de novo. Isso combina com o padrão dos reviews: combate responsivo, personagens com estilo próprio e co-op dão razões diferentes para continuar. 

Um estudo com 60 jogadores de *Candy Crush* encontrou menos fluxo e vontade de continuar quando o jogo era fácil demais; desafios normais ou difíceis geraram resultados maiores. Isso não foi testado em beat ’em ups, mas dá uma boa hipótese de design: dificuldade que acompanha a habilidade mantém o jogador envolvido, desde que os ataques inimigos sejam legíveis e a derrota pareça justa. 

Sobre **dopamina**: é melhor não tratar como uma barra de prazer que o jogo “ativa” com qualquer recompensa. Pesquisas clássicas sobre neurônios dopaminérgicos estudam como sinais ligados à previsão de recompensa participam da aprendizagem. Reviews da Steam não medem dopamina, então aqui o termo serve só como atalho informal para falar de feedback e vontade de repetir. 

## Como eu traduziria isso para um protótipo

O ciclo central deveria ser algo assim:

**golpe fácil de entender → reação forte do inimigo → combo ou esquiva bem-sucedida → desafio um pouco maior → recompensa por aprender**

Para um projeto próprio, eu priorizaria:

1. **Sensação de combate:** controle responsivo, golpes legíveis e retorno visual e sonoro que deixe claro quando acertou, errou ou interrompeu um inimigo.
2. **Diferença real entre personagens:** cada escolha precisa mudar o jeito de jogar, não só os atributos.
3. **Variedade de encontros:** inimigos e chefes que obriguem a alternar entre atacar, recuar, esquivar e usar o cenário.
4. **Co-op simples de entrar:** jogar junto é um dos pontos mais recorrentes nos sucessos e reviews. Se o orçamento for curto, vale testar co-op local antes de tentar construir um sistema online complexo.
5. **Rejogabilidade sem grind:** modos arcade, chefes, rotas, desafios e desbloqueios que abram opções novas; evitar prolongar a campanha só com upgrades numéricos.

**Minha leitura:** há espaço comercial para beat ’em up na Steam, mas os números da tabela são sucessos e não representam a média do gênero. O padrão mais consistente é identidade marcante para atrair, combate gostoso para gerar reviews positivos, co-op para criar momentos compartilhados e desafios variados para dar motivo de voltar. A franquia ajuda bastante na descoberta; *Castle Crashers* e *Absolum* também mostram que uma identidade própria pode funcionar quando o jogo entrega personalidade e uma boa experiência central.