export interface User {
	id: string; // Id do jogador
	name: string; // Nome do jogador
    email: string; // Email do jogador
    password: string; // Senha do jogador
	isActive: boolean; // Indica se o jogador está ativo ou não (Soft delete)
	userType: "player" | "guest" | "ai" | "admin" | "creator"; // Tipo do jogador (player, guest, ai, admin, creator)
    createdAt: Date; // Data de criação do jogador
    updatedAt: Date; // Data de atualização do jogador
}

export interface Game {
	id: string; // Id do jogo
    creatorId: string; // Id do jogador que criou o jogo
	name: string; // Nome do jogo
	description: string; // Descrição do jogo
	tags: string[]; // Tags do jogo (Online, Offline, Multiplayer, Singleplayer, 1x1, 2x2 etc.)
	record?: number; // Recorde do jogo (pontuação mais alta)
	recordHolderId?: string; // Id do jogador que detém o recorde do jogo
	isActive: boolean; // Indica se o jogo está ativo ou não
	gameSrc: string; // Caminho para o arquivo do jogo (HTML, JS, CSS)
	thumbnailSrc: string; // Caminho para a imagem de capa do jogo
    currentVersion: string; // Versão atual do jogo
	createdAt: Date; // Data de criação do jogo
	updatedAt: Date; // Data de atualização do jogo
}

export interface GameLike {
	playerId: string; // Id do jogador que curtiu o jogo
	gameId: string; // Id do jogo que foi curtido
	createdAt: Date; // Data de criação do like
}

export interface Match {
	id: string; // Id da partida
	players: MatchPlayer[]; // Ids dos jogadores que participaram da partida
	gameId: string; // Id do jogo que foi jogado
	createdAt: Date; // Data de criação da partida
}

export interface MatchPlayer {
    playerId: string; // Id do jogador que participou da partida
    score: number; // Pontuação obtida na partida
	result: "win" | "loss"; // Resultado da partida (playing, win, loss)
}

export interface Review {
    id: string; // Id da avaliação
    playerId: string; // Id do jogador que fez a avaliação
    gameId: string; // Id do jogo que foi avaliado
    rating: 1 | 2 | 3 | 4 | 5; // 1-5
    comment?: string; // Comentário feito pelo jogador
    createdAt: Date; // Data de criação da avaliação
    updatedAt?: Date; // Data de atualização da avaliação
}
