<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php 
    #01
    $resultados = array();

    function calculo($n1, $n2){
        global $resultados;

        $media = ($n1 + $n2) / 2 ;

        if ($media >= 6) {
            $situation = 'Aprovado';
            
        } else {
            $situation = 'Reprovado';
        };
        
        array_push($resultados, array(
            'media' => $media,
            'situacao' => $situation
        ));
    };

    calculo(4, 7);
    var_dump($resultados);



    #02
    $listaNum1 = array(
        ['nota' => 6,
        'peso' => 2],
        ['nota' => 7,
        'peso' => 3],
        ['nota' => 8,
        'peso' => 4],
    );

    $media = 0;

    function mediaPonderada(){
        global $listaNum1, $media;
        $mult = 0;
        foreach ($listaNum1 as $key => $num) {
            $media += ($num['nota'] * $num['peso']);
            $mult += $num['peso'];
        };
        var_dump($media / $mult); 
    };
    mediaPonderada();





    #03
        $listaProdutos = array();

        function cadastrarProdutos($nome, $preco){
            global $listaProdutos;

            array_push($listaProdutos, array(
                'nome' => $nome,
                'preço' => $preco
            ));
        };

        function listaProdutos(){
            global $listaProdutos;

            foreach ($listaProdutos as $key => $produtos) {
                echo '<strong>'. $produtos['nome'] .'</strong>' . ':' . $produtos['preço'];
                echo '<br>';
                echo '<hr>';
            };
        };

        function excluir($name){
            global $listaProdutos;

            foreach ($listaProdutos as $key => $produtos) {
                if($produtos['nome'] == $name){
                    unset($listaProdutos[$key]);
                    echo 'Excluido com Sucesso!';
                    echo '<br>';
                    echo '<hr>';
                    listaProdutos();
                }
            };
        }


        cadastrarProdutos('Iphone 15', 10000);
        cadastrarProdutos('PS5', 4000);
        cadastrarProdutos('PC', 5000);
        cadastrarProdutos('Caneta', 8);
        listaProdutos();
        excluir('Caneta');

    
?>
</body>
</html>
