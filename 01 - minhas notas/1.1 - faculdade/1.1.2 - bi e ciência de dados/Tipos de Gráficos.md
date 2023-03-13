data-de-criacao:: 07-mar-2023 - 19:25
materia:: #estatística 
tags:: #notas/aula
backlinks:: [[Estatística]] 

---


## Anotações

## Gráfico de Linha

São os melhores quando você deseja mostrar como o valor de algo muda ao longo do tempo ou comparar como várias coisas mudam ao longo do tempo com relação umas às outras.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}

\begin{document}
    \begin{tikzpicture}
\begin{axis}[
    xlabel=$x$,
    ylabel=$y$,
    xmin=0, xmax=30,
    ymin=0, ymax=100,
    xtick={10,20,30},
    xticklabels={A,B,X},   % <---
    ytick={0,10,...,100}
            ]
\addplot[smooth,mark=*,blue] plot coordinates {
    (0,10)
    (8,30)
    (16,40)
};
\addlegendentry{Case 1}

\addplot[smooth,color=red,mark=x]
    plot coordinates {
        (4,15)
        (10,25)
        (15,40)
        (18,60)
    };
\addlegendentry{Case 2}
\end{axis}
    \end{tikzpicture}
\end{document}
```

---
### Gráfico de Barras

É comum para representar graficamente dados categóricos ou dados classificados em grupos.

```tikz
\usepackage{pgfplots} 
 
\begin{document}
 
\begin{tikzpicture}
 
\begin{axis} [ybar,height=6cm,width=8cm]
\addplot coordinates {
    (1,0.5) 
    (2,2.5) 
    (3,2) 
    (4,3)
};
\end{axis}
 
\end{tikzpicture}
 
\end{document}
```

---
### Gráfico de Área

É uma forma especializada do gráfico de linhas, onde, em vez de simplesmente conectar nossos pontos de dados com uma 


```start-multi-column
ID: ID_tudd
Number of Columns: 2
Largest Column: standard
border: false
shadow: false
```

#### Bons para:

--- column-end ---

#### Evitar quando:

=== end-multi-column



```tikz
\usepackage{pgfplots}
\usepackage{xcolor}
\pgfplotsset{compat=1.8}


\makeatletter
\let\percent\@percentchar
\makeatother

\begin{document}
\begin{tikzpicture}
\begin{axis}[
        %title = {Distinctive SIFT features vs. Image resolution},
        xlabel= X LABEL HERE, 
        ylabel= {Y LABEL HERE},
        enlarge x limits=0.1,
        legend style={
                at={(0.5,-0.15)},               
                anchor=north,legend columns=-1
        },
        width=12.8cm,
        height=8cm,
        point meta={x*100},
        symbolic x coords={100\percent, 90\percent, 79\percent, 69\percent, 60\percent, 50\percent, 39\percent, 30\percent, 20\percent},
        %grid=major
]
% Median
\addplot+  [left color=green, right color=red] coordinates {
(100\percent, 7218) (90\percent, 6075) (79\percent, 4021) (69\percent, 2906) (60\percent, 1861) (50\percent, 768) (39\percent, 451) (30\percent, 317) (20\percent, 164)} \closedcycle;

\end{axis}
\end{tikzpicture}
\end{document}
```

---
### Gráfico de dispersão

mostra a relação entre duas variáveis numéricas plotadas simultaneamente ao longo dos eixos horizontal e vertical.
