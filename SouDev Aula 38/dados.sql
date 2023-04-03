-- Para buscar os dados de uma tabela --
-- Seleciona todas as colunas de todas as linhas/tuplas --
SELECT * FROM tb_curso;

-- Para selecionar apenas algumass colunas de todas as linhas --
SELECT nome, carga_horaria FROM tb_curso;

-- Para selecionar todas as colunas apenas de algumas linhas (filtrar) --
SELECT * FROM tb_curso WHERE carga_horaria > 100;

-- Para selecionar um número X de linhas --
SELECT * FROM tb_curso LIMIT 2;

-- Para contar o número de linhas de uma tabela --
SELECT COUNT(*) FROM tb_curso;

-- Para inserir dados em uma tabela --
INSERT INTO tb_curso
    (nome, carga_horaria, descricao)
VALUES
     ('valor 1', 'valor 2', 'valor 3');

-- Para editar os dados de uma tabela --
UPDATE tb_curso SET
coluna1= 'valor1';

-- Para excluir dados de uma tabela --
DELETE FROM tb_curso;
