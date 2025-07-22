up-db:
	docker compose -f apps/backend/api/docker-compose.dev.yml up redis postgres -d

down-db:
	docker compose -f apps/backend/api/docker-compose.dev.yml down redis postgres

up-back:
	docker compose -f apps/backend/api/docker-compose.dev.yml up -d

up-front:
	cd apps/frontend/sidebar && yarn dev & \
	cd apps/frontend/chat && yarn dev & \
	cd apps/frontend/host && yarn dev & \
	wait
